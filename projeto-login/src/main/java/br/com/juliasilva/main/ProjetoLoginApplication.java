package br.com.juliasilva.main;

import controllers.LoginController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackageClasses = LoginController.class)
@ComponentScan(basePackageClasses = WebConfig.class)


public class ProjetoLoginApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjetoLoginApplication.class, args);
	}

}
