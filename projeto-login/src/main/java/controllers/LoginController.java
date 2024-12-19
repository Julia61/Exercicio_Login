package controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/login")
public class LoginController {



    @PostMapping("/valoresLogin")
    public ResponseEntity<String> valoresLogin(@RequestBody Metodos metodos) {
        if ("Julia".equals(metodos.getUsuario())) {
            return ResponseEntity.ok("conectado");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário não encontrado!! Tente novamente!");
    }


}





