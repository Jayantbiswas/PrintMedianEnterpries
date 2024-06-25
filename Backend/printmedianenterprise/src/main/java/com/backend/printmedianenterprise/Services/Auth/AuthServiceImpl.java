package com.backend.printmedianenterprise.Services.Auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.backend.printmedianenterprise.Dto.SignupRequest;
import com.backend.printmedianenterprise.Dto.UserDto;
import com.backend.printmedianenterprise.Entity.User;
import com.backend.printmedianenterprise.Enum.UserRole;
import com.backend.printmedianenterprise.Repository.UserRepository;

import jakarta.annotation.PostConstruct;

@Service
public class AuthServiceImpl implements AuthService{

	@Autowired
	private UserRepository userRepository;
	
	public UserDto createUser(SignupRequest signupRequest) {
		User user = new User();
		user.setEmail(signupRequest.getEmail());
		user.setName(signupRequest.getName());
		user.setMobile(signupRequest.getMobile());
		user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
		user.setRole(UserRole.USER);
		User createdUser = userRepository.save(user);
		
		UserDto userDto = new UserDto();
		userDto.setId(createdUser.getId());
		
		return userDto;
	}
	
	public Boolean hasUserWithEmail(String email) {
		return userRepository.findFirstByEmail(email).isPresent();
	}
	
	@PostConstruct
	public void createAdminAccount() {
		User adminAccount = userRepository.findByRole(UserRole.ADMIN);
		if(adminAccount==null) {
			User user = new User();
			user.setEmail("admin@email.com");
			user.setName("Admin");
			user.setRole(UserRole.ADMIN);
			user.setPassword(new BCryptPasswordEncoder().encode("admin@34"));
			user.setMobile("9370406000");
			userRepository.save(user);
		}
	}
}
