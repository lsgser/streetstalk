DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`username` varchar(100) NOT NULL UNIQUE,
	`password` varchar(200) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	UNIQUE KEY `admin_username_unique` (`username`)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `magazines`;

CREATE TABLE `magazines` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`description` varchar(255) DEFAULT NULL,
	`magazine_cover` varchar(255) NOT NULL UNIQUE,
	`magazine` varchar(255) NOT NULL UNIQUE,
	`issue` int(11) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	UNIQUE KEY `magazines_magazine_unique` (`magazine`),
	UNIQUE KEY `magazine_magazine_cover_unique` (`magazine`)
)ENGINE=InnoDB;

DROP TABLE IF EXISTS `admin_login_tokens`;

CREATE TABLE `admin_login_tokens` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`user_id` int(11) NOT NULL,
	`token` varchar(255) NOT NULL UNIQUE,
	`created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`id`),
	UNIQUE KEY `admin_login_tokens_token_unique` (`token`),
	KEY `admin_login_tokens_user_id_foreign` (`user_id`),
	CONSTRAINT `admin_login_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE			
)ENGINE=InnoDB;
