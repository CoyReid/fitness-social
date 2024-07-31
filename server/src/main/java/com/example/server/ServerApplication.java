package com.example.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}

}


//Code for the AuthController.java file in the server/src/main/java/com/example/server/controller directory
// @RestController
// @RequestMapping("/api/auth")
// public class AuthController {
//     @Autowired
//     private AuthenticationManager authenticationManager;
//     @Autowired
//     private JwtUtils jwtUtils;

//     @PostMapping("/signin")
//     public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
//         Authentication authentication = authenticationManager.authenticate(
//             new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
//         SecurityContextHolder.getContext().setAuthentication(authentication);
//         String jwt = jwtUtils.generateJwtToken(authentication);
//         return ResponseEntity.ok(new JwtResponse(jwt));
//     }
// }
