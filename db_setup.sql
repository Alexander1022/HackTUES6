CREATE TABLE profiles
(
	id INT Primary Key NOT NULL auto_increment,
	username CHAR(50) NOT NULL UNIQUE,
	email CHAR(100) NOT NULL UNIQUE,
	password CHAR(255) NOT NULL,
	country CHAR(30),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
