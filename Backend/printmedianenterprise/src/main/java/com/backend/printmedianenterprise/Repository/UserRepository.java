package com.backend.printmedianenterprise.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.printmedianenterprise.Entity.User;
import com.backend.printmedianenterprise.Enum.UserRole;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	Optional<User> findFirstByEmail(String email);
	
	User findByRole(UserRole userRole);
}
