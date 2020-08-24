-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Tempo de geração: 24/08/2020 às 19:17
-- Versão do servidor: 5.7.26
-- Versão do PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Banco de dados: `webapp`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `registered_company_name` varchar(50) NOT NULL,
  `brand_name_dba` varchar(50) NOT NULL,
  `online_store_website` varchar(100) NOT NULL,
  `business_owner_email` varchar(50) NOT NULL,
  `federal_tax_classification` varchar(50) NOT NULL,
  `tax_identification_number` varchar(100) NOT NULL,
  `street_number_street_address` varchar(100) NOT NULL,
  `postal_code` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `province_of_incorporation` varchar(50) NOT NULL,
  `country_currency` varchar(50) NOT NULL,
  `account_holders_name` varchar(50) NOT NULL,
  `routing_number` varchar(50) NOT NULL,
  `account_number` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `companies`
--

INSERT INTO `companies` (`id`, `registered_company_name`, `brand_name_dba`, `online_store_website`, `business_owner_email`, `federal_tax_classification`, `tax_identification_number`, `street_number_street_address`, `postal_code`, `city`, `country`, `province_of_incorporation`, `country_currency`, `account_holders_name`, `routing_number`, `account_number`) VALUES
(11, 'Teste Ltd.', 'Teste', 'teste.com', 'contact@teste.com', 'Sole Proprietorships', '131415', '81 Lord St', 'V6P 3K2', 'Vancouver', 'Canada', 'British Columbia', 'Dollar', 'Tester', '11223', '332211');

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `woocommece_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `sku` int(40) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `rental_price` decimal(10,0) DEFAULT NULL,
  `rental_price2` decimal(10,0) DEFAULT NULL,
  `rental_price3` decimal(10,0) DEFAULT NULL,
  `rental_period` int(11) DEFAULT NULL,
  `rental_period2` int(11) DEFAULT NULL,
  `rental_period3` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `active` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `purchases`
--

CREATE TABLE `purchases` (
  `id` int(11) NOT NULL,
  `customer_name` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `delivery_method` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `tracking_code` varchar(255) NOT NULL,
  `shiped` tinyint(4) NOT NULL,
  `total_price` decimal(10,0) NOT NULL,
  `final_price` decimal(10,0) NOT NULL,
  `company_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `purchases`
--

INSERT INTO `purchases` (`id`, `customer_name`, `address`, `delivery_method`, `email`, `phone`, `tracking_code`, `shiped`, `total_price`, `final_price`, `company_id`) VALUES
(1, 'Douglas Gois', 'Cambie Street', 'Standard', 'douglas@gmail.com', '123-123-1234', '', 0, '100', '100', 11),
(2, 'Douglas Gois 2', 'Cambie Street', 'Standard', 'douglas@gmail.com', '123-123-1234', '', 0, '300', '300', 11);

-- --------------------------------------------------------

--
-- Estrutura para tabela `purchase_items`
--

CREATE TABLE `purchase_items` (
  `woocommece_id` int(11) NOT NULL,
  `company_id` int(11) NOT NULL,
  `purchase_id` int(11) NOT NULL,
  `sku` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `color` varchar(50) NOT NULL,
  `size` varchar(50) NOT NULL,
  `duration` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `image` varchar(255) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `purchase_items`
--

INSERT INTO `purchase_items` (`woocommece_id`, `company_id`, `purchase_id`, `sku`, `quantity`, `color`, `size`, `duration`, `price`, `image`, `id`) VALUES
(1, 11, 1, '112233', 1, 'Red', 'Small', 4, '100', '', 1),
(5, 11, 2, '445566', 1, 'Green', 'Medium', 3, '200', '', 2),
(4, 11, 2, '334455', 1, 'Blue', 'Small', 3, '100', '', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(60) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `residential_address` varchar(255) NOT NULL,
  `postal_code` varchar(10) NOT NULL,
  `city` varchar(20) NOT NULL,
  `country` varchar(30) NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT '0',
  `company_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `date_of_birth`, `residential_address`, `postal_code`, `city`, `country`, `active`, `company_id`) VALUES
(9, 'douglasciole@gmail.com', 'Joao Maria Douglas', 'de Gois', '698dc19d489c4e4db73e28a713eab07b', '1987-12-12', '48 Cambie Street', 'V5Z 2Y1', 'Vancouver', 'Canada', 0, 11);

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`woocommece_id`,`company_id`);

--
-- Índices de tabela `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`,`company_id`);

--
-- Índices de tabela `purchase_items`
--
ALTER TABLE `purchase_items`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `purchase_items`
--
ALTER TABLE `purchase_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de tabela `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
