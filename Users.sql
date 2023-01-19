-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 19, 2023 at 07:21 PM
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
(1, 'email@email.com', 'password', 'John Doe', 'USER'),
(2, 'admin@email.com', 'password', 'Jane Doe', 'ADMIN');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'ID of the user', AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
