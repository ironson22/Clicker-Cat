-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 06, 2023 at 08:20 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ClickerCat`
--

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `ID` int(11) NOT NULL COMMENT 'ID of the user',
  `EMAIL` varchar(500) NOT NULL COMMENT 'User''s email',
  `PASSWORD` varchar(500) NOT NULL COMMENT 'User''s password',
  `NAME` varchar(500) NOT NULL COMMENT 'User''s name',
  `ROLE` varchar(500) NOT NULL DEFAULT 'USER' COMMENT 'User''s role'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table used to hold user data';

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`ID`, `EMAIL`, `PASSWORD`, `NAME`, `ROLE`) VALUES
(1, 'email@email.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'John Doe', 'USER'),
(2, 'admin@email.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'Jane Doe', 'ADMIN'),
(3, 'test@test.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'Test User', 'USER'),
(4, 'encodingTest@email.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'name lastname', 'USER'),
(5, 'tester@tester.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'Name Namerson', 'USER'),
(6, 'LastEncodeTest@test.com', 'e7cf3ef4f17c3999a94f2c6f612e8a888e5b1026878e4e19398b23bd38ec221a', 'Namer Nameson', 'USER');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID of the user', AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
