PROYECTO EN PROCESO/NO TERMINADO AUN

Este proyecto utiliza una base de datos MySQL llamada market_db.

📌 Requisitos : MySQL 9.x , phpMyAdmin 5.2.1 o superior,PHP 8.3.x


⚙️ Pasos de instalación

Crear la base de datos

CREATE DATABASE market_db;


Seleccionar la base de datos

USE market_db;


Importar el script SQL

Ir a phpMyAdmin

Seleccionar la base de datos market_db

Entrar al apartado SQL

Pegar el siguiente script completo y Ejecutar



-- phpMyAdmin SQL Dump
-- version 5.2.1
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 08-01-2026
-- Versión del servidor: 9.1.0
-- Versión de PHP: 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

SET NAMES utf8mb4;

-- Base de datos: `market_db`

-- =========================
-- TABLA: auditoria_stock
-- =========================
DROP TABLE IF EXISTS auditoria_stock;
CREATE TABLE auditoria_stock (
  id_auditoria INT AUTO_INCREMENT PRIMARY KEY,
  id_producto_fk INT,
  id_trabajador_fk INT,
  cantidad_anterior INT,
  cantidad_nueva INT,
  motivo VARCHAR(255),
  fecha_movimiento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM;

-- =========================
-- TABLA: categorias
-- =========================
DROP TABLE IF EXISTS categorias;
CREATE TABLE categorias (
  id_categoria INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT
) ENGINE=MyISAM;

-- =========================
-- TABLA: detalle_ventas
-- =========================
DROP TABLE IF EXISTS detalle_ventas;
CREATE TABLE detalle_ventas (
  id_detalle INT AUTO_INCREMENT PRIMARY KEY,
  id_venta_fk INT,
  id_producto_fk INT,
  cantidad INT NOT NULL,
  precio_unitario_historico DECIMAL(10,2) NOT NULL
) ENGINE=MyISAM;

-- =========================
-- TABLA: metodos_pago
-- =========================
DROP TABLE IF EXISTS metodos_pago;
CREATE TABLE metodos_pago (
  id_metodo INT AUTO_INCREMENT PRIMARY KEY,
  nombre_metodo VARCHAR(50) NOT NULL
) ENGINE=MyISAM;

-- =========================
-- TABLA: nominas
-- =========================
DROP TABLE IF EXISTS nominas;
CREATE TABLE nominas (
  id_nomina INT AUTO_INCREMENT PRIMARY KEY,
  id_trabajador_fk INT,
  mes_pago INT,
  anio_pago INT,
  sueldo_base DECIMAL(10,2),
  comisiones DECIMAL(10,2) DEFAULT 0.00,
  deducciones DECIMAL(10,2) DEFAULT 0.00,
  sueldo_neto DECIMAL(10,2)
) ENGINE=MyISAM;

-- =========================
-- TABLA: productos
-- =========================
DROP TABLE IF EXISTS productos;
CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  stock INT DEFAULT 0,
  id_categoria_fk INT,
  id_proveedor_fk INT,
  id_trabajador_publicador INT,
  fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM;

-- =========================
-- TABLA: proveedores
-- =========================
DROP TABLE IF EXISTS proveedores;
CREATE TABLE proveedores (
  id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre_empresa VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  email VARCHAR(100)
) ENGINE=MyISAM;

-- =========================
-- TABLA: roles
-- =========================
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id_rol INT AUTO_INCREMENT PRIMARY KEY,
  nombre_rol VARCHAR(50) NOT NULL
) ENGINE=MyISAM;

-- =========================
-- TABLA: usuarios
-- =========================
DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios (
  id_usuario INT AUTO_INCREMENT PRIMARY KEY,
  id_rol_fk INT,
  nombre VARCHAR(50) NOT NULL,
  apellido VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  telefono VARCHAR(20),
  direccion TEXT,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=MyISAM;

-- =========================
-- TABLA: trabajadores
-- =========================
DROP TABLE IF EXISTS trabajadores;
CREATE TABLE trabajadores (
  id_trabajador INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario_fk INT UNIQUE,
  puesto VARCHAR(50),
  salario_base DECIMAL(10,2),
  fecha_contratacion DATE
) ENGINE=MyISAM;

-- =========================
-- TABLA: ventas
-- =========================
DROP TABLE IF EXISTS ventas;
CREATE TABLE ventas (
  id_venta INT AUTO_INCREMENT PRIMARY KEY,
  id_usuario_cliente INT,
  id_metodo_pago_fk INT,
  fecha_venta DATETIME DEFAULT CURRENT_TIMESTAMP,
  total DECIMAL(10,2) DEFAULT 0.00
) ENGINE=MyISAM;

COMMIT;
