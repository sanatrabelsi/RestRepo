package com.ensi.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.ensi.demo.entities.Article;
import com.ensi.demo.repository.ArticleRepository;
import com.ensi.demo.repository.ProviderRepository;
import com.ensi.demo.exception.ResourceNotFoundException;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleRestController {

    private final ArticleRepository articleRepository;
    private final ProviderRepository providerRepository;

    @Autowired
    public ArticleRestController(ArticleRepository articleRepository, ProviderRepository providerRepository) {
        this.articleRepository = articleRepository;
        this.providerRepository = providerRepository;
    }

    @GetMapping("/list")
    public List<Article> getAllArticles() {
        return (List<Article>) articleRepository.findAll();
    }

    @PostMapping("/add/{providerId}")
    public ResponseEntity<Article> createArticle(@PathVariable(value = "providerId") Long providerId,
                                                 @Valid @RequestBody Article article) {
        return providerRepository.findById(providerId).map(provider -> {
            article.setProvider(provider);
            Article savedArticle = articleRepository.save(article);
            return ResponseEntity.created(URI.create("/articles/" + savedArticle.getId())).body(savedArticle);
        }).orElseThrow(() -> new ResourceNotFoundException("ProviderId " + providerId + " not found"));
    }

    @PutMapping("/update/{providerId}/{articleId}")
    public Article updateArticle(@PathVariable(value = "providerId") Long providerId,
                                 @PathVariable(value = "articleId") Long articleId,
                                 @Valid @RequestBody Article articleRequest) {
        if (!providerRepository.existsById(providerId)) {
            throw new ResourceNotFoundException("ProviderId " + providerId + " not found");
        }
        return articleRepository.findById(articleId).map(article -> {
            article.setPrice(articleRequest.getPrice());
            article.setLabel(articleRequest.getLabel());
            article.setPicture(articleRequest.getPicture()); // Corrected line
            return articleRepository.save(article);
        }).orElseThrow(() -> new ResourceNotFoundException("ArticleId " + articleId + " not found"));
    }

    @DeleteMapping("/delete/{articleId}")
    public ResponseEntity<?> deleteArticle(@PathVariable(value = "articleId") Long articleId) {
        return articleRepository.findById(articleId).map(article -> {
            articleRepository.delete(article);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("Article not found with id " + articleId));
    }
}
