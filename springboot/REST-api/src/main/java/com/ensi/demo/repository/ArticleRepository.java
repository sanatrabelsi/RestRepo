package com.ensi.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.ensi.demo.entities.Article;
@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}
