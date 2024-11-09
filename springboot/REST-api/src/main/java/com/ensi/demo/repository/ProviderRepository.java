package com.ensi.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.ensi.demo.entities.Provider;

public interface ProviderRepository extends JpaRepository<Provider, Long> {

}
