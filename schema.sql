CREATE TABLE `estudiantes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `ciclo` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `empresas` (
  `cif` varchar(9) NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cif`)
);

CREATE TABLE `ofertas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) DEFAULT NULL,
  `descripcion` text,
  `salario` decimal(7,2) DEFAULT NULL,
  `empresa` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empresa` (`empresa`),
  CONSTRAINT `ofertas_ibfk_1` FOREIGN KEY (`empresa`) REFERENCES `empresas` (`cif`)
);

CREATE TABLE `suscripciones` (
  `estudiante` int NOT NULL,
  `oferta` int NOT NULL,
  PRIMARY KEY (`estudiante`,`oferta`),
  KEY `oferta` (`oferta`),
  CONSTRAINT `suscripciones_ibfk_1` FOREIGN KEY (`estudiante`) REFERENCES `estudiantes` (`id`),
  CONSTRAINT `suscripciones_ibfk_2` FOREIGN KEY (`oferta`) REFERENCES `ofertas` (`id`)
);