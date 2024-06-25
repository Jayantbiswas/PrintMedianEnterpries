package com.backend.printmedianenterprise.Services.Auth;

import com.backend.printmedianenterprise.Dto.SignupRequest;
import com.backend.printmedianenterprise.Dto.UserDto;

public interface AuthService {

	UserDto createUser(SignupRequest signupRequest);
	
	Boolean hasUserWithEmail(String email);
}
