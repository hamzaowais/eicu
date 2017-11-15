-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: iEXPLORECC
-- ------------------------------------------------------
-- Server version	5.7.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ADMISSIONS`
--

DROP TABLE IF EXISTS `ADMISSIONS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ADMISSIONS` (
  `ROW_ID` smallint(5) unsigned NOT NULL,
  `SUBJECT_ID` mediumint(8) unsigned NOT NULL,
  `HADM_ID` mediumint(8) unsigned NOT NULL,
  `ADMITTIME` datetime NOT NULL,
  `DISCHTIME` datetime DEFAULT NULL,
  `DEATHTIME` datetime DEFAULT NULL,
  `ADMISSION_TYPE` varchar(255) DEFAULT NULL,
  `ADMISSION_LOCATION` varchar(255) DEFAULT NULL,
  `DISCHARGE_LOCATION` varchar(255) DEFAULT NULL,
  `INSURANCE` varchar(255) DEFAULT NULL,
  `LANGUAGE` varchar(255) DEFAULT NULL,
  `RELIGION` varchar(255) DEFAULT NULL,
  `MARITAL_STATUS` varchar(255) DEFAULT NULL,
  `ETHNICITY` varchar(255) DEFAULT NULL,
  `EDREGTIME` datetime DEFAULT NULL,
  `EDOUTTIME` datetime DEFAULT NULL,
  `DIAGNOSIS` text,
  `HOSPITAL_EXPIRE_FLAG` tinyint(3) unsigned DEFAULT NULL,
  `HAS_CHARTEVENTS_DATA` tinyint(3) unsigned DEFAULT NULL,
  UNIQUE KEY `ADMISSIONS_ROW_ID` (`ROW_ID`),
  UNIQUE KEY `ADMISSIONS_HADM_ID` (`HADM_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ADMISSIONS`
--

LOCK TABLES `ADMISSIONS` WRITE;
/*!40000 ALTER TABLE `ADMISSIONS` DISABLE KEYS */;
/*!40000 ALTER TABLE `ADMISSIONS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CHARTEVENTS`
--

DROP TABLE IF EXISTS `CHARTEVENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CHARTEVENTS` (
  `ROW_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `SUBJECT_ID` mediumint(8) unsigned NOT NULL,
  `HADM_ID` mediumint(8) unsigned DEFAULT NULL,
  `ICUSTAY_ID` mediumint(8) unsigned DEFAULT NULL,
  `ITEMID` mediumint(8) unsigned NOT NULL,
  `CHARTTIME` datetime NOT NULL,
  `STORETIME` datetime DEFAULT NULL,
  `CGID` smallint(5) unsigned DEFAULT NULL,
  `VALUE` text,
  `VALUENUM` float DEFAULT NULL,
  `VALUEUOM` varchar(255) DEFAULT NULL,
  `WARNING` tinyint(3) unsigned DEFAULT NULL,
  `ERROR` tinyint(3) unsigned DEFAULT NULL,
  `RESULTSTATUS` varchar(255) DEFAULT NULL,
  `STOPPED` varchar(255) DEFAULT NULL,
  UNIQUE KEY `CHARTEVENTS_ROW_ID` (`ROW_ID`),
  KEY `index2` (`SUBJECT_ID`,`HADM_ID`,`ICUSTAY_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=148 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CHARTEVENTS`
--

LOCK TABLES `CHARTEVENTS` WRITE;
/*!40000 ALTER TABLE `CHARTEVENTS` DISABLE KEYS */;
INSERT INTO `CHARTEVENTS` VALUES (1,1,1,1,1,'2004-01-09 00:00:00',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(2,1,1,1,1,'2017-05-21 03:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(3,1,1,1,1,'2017-05-21 04:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(4,1,1,1,1,'2017-05-21 05:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(5,1,1,1,1,'2017-05-21 06:49:28',NULL,NULL,'45',NULL,NULL,NULL,NULL,NULL,NULL),(6,1,1,1,1,'2017-05-21 07:49:28',NULL,NULL,'42',NULL,NULL,NULL,NULL,NULL,NULL),(7,1,1,1,1,'2017-05-21 08:49:28',NULL,NULL,'95',NULL,NULL,NULL,NULL,NULL,NULL),(8,1,1,1,1,'2017-05-21 09:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(9,1,1,1,1,'2017-05-21 10:49:28',NULL,NULL,'56',NULL,NULL,NULL,NULL,NULL,NULL),(10,1,1,1,1,'2017-05-21 11:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(11,1,1,1,1,'2017-05-21 12:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(12,1,1,1,1,'2017-05-21 13:49:28',NULL,NULL,'43',NULL,NULL,NULL,NULL,NULL,NULL),(13,1,1,1,1,'2017-05-21 14:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(14,1,1,1,1,'2017-05-21 15:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(15,1,1,1,1,'2017-05-21 16:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(16,1,1,1,1,'2017-05-21 17:49:28',NULL,NULL,'69',NULL,NULL,NULL,NULL,NULL,NULL),(17,1,1,1,1,'2017-05-21 18:49:28',NULL,NULL,'81',NULL,NULL,NULL,NULL,NULL,NULL),(18,1,1,1,1,'2017-05-21 19:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(19,1,1,1,1,'2017-05-21 20:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(20,1,1,1,1,'2017-05-21 21:49:28',NULL,NULL,'73',NULL,NULL,NULL,NULL,NULL,NULL),(21,1,1,1,1,'2017-05-21 22:49:28',NULL,NULL,'61',NULL,NULL,NULL,NULL,NULL,NULL),(22,1,1,1,1,'2017-05-21 23:49:28',NULL,NULL,'82',NULL,NULL,NULL,NULL,NULL,NULL),(23,1,1,1,1,'2017-05-22 00:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(24,1,1,1,1,'2017-05-22 01:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(25,1,1,1,1,'2017-05-22 02:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(26,1,1,1,1,'2017-05-22 03:49:28',NULL,NULL,'50',NULL,NULL,NULL,NULL,NULL,NULL),(27,1,1,1,1,'2017-05-22 04:49:28',NULL,NULL,'78',NULL,NULL,NULL,NULL,NULL,NULL),(28,1,1,1,1,'2017-05-22 05:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(29,1,1,1,1,'2017-05-22 06:49:28',NULL,NULL,'87',NULL,NULL,NULL,NULL,NULL,NULL),(30,1,1,1,1,'2017-05-22 07:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(31,1,1,1,1,'2017-05-22 08:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(32,1,1,1,1,'2017-05-22 09:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(33,1,1,1,1,'2017-05-22 10:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(34,1,1,1,1,'2017-05-22 11:49:28',NULL,NULL,'48',NULL,NULL,NULL,NULL,NULL,NULL),(35,1,1,1,1,'2017-05-22 12:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(36,1,1,1,1,'2017-05-22 13:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(37,1,1,1,1,'2017-05-22 14:49:28',NULL,NULL,'100',NULL,NULL,NULL,NULL,NULL,NULL),(38,1,1,1,1,'2017-05-22 15:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(39,1,1,1,1,'2017-05-22 16:49:28',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(40,1,1,1,1,'2017-05-22 17:49:28',NULL,NULL,'93',NULL,NULL,NULL,NULL,NULL,NULL),(41,1,1,1,1,'2017-05-22 18:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(42,1,1,1,1,'2017-05-22 19:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(43,1,1,1,1,'2017-05-22 20:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(44,1,1,1,1,'2017-05-22 21:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(45,1,1,1,1,'2017-05-22 22:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(46,1,1,1,1,'2017-05-22 23:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(47,1,1,1,1,'2017-05-23 00:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(48,1,1,1,1,'2017-05-23 01:49:28',NULL,NULL,'59',NULL,NULL,NULL,NULL,NULL,NULL),(49,1,1,1,1,'2017-05-23 02:49:28',NULL,NULL,'98',NULL,NULL,NULL,NULL,NULL,NULL),(50,1,1,1,1,'2017-05-23 03:49:28',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(51,1,1,1,1,'2017-05-23 04:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(52,1,1,1,1,'2017-05-23 05:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(53,1,1,1,1,'2017-05-23 06:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(54,1,1,1,1,'2017-05-23 07:49:28',NULL,NULL,'45',NULL,NULL,NULL,NULL,NULL,NULL),(55,1,1,1,1,'2017-05-23 08:49:28',NULL,NULL,'42',NULL,NULL,NULL,NULL,NULL,NULL),(56,1,1,1,1,'2017-05-23 09:49:28',NULL,NULL,'95',NULL,NULL,NULL,NULL,NULL,NULL),(57,1,1,1,1,'2017-05-23 10:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(58,1,1,1,1,'2017-05-23 11:49:28',NULL,NULL,'56',NULL,NULL,NULL,NULL,NULL,NULL),(59,1,1,1,1,'2017-05-23 12:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(60,1,1,1,1,'2017-05-23 13:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(61,1,1,1,1,'2017-05-23 14:49:28',NULL,NULL,'43',NULL,NULL,NULL,NULL,NULL,NULL),(62,1,1,1,1,'2017-05-23 15:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(63,1,1,1,1,'2017-05-23 16:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(64,1,1,1,1,'2017-05-23 17:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(65,1,1,1,1,'2017-05-23 18:49:28',NULL,NULL,'69',NULL,NULL,NULL,NULL,NULL,NULL),(66,1,1,1,1,'2017-05-23 19:49:28',NULL,NULL,'81',NULL,NULL,NULL,NULL,NULL,NULL),(67,1,1,1,1,'2017-05-23 20:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(68,1,1,1,1,'2017-05-23 21:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(69,1,1,1,1,'2017-05-23 22:49:28',NULL,NULL,'73',NULL,NULL,NULL,NULL,NULL,NULL),(70,1,1,1,1,'2017-05-23 23:49:28',NULL,NULL,'61',NULL,NULL,NULL,NULL,NULL,NULL),(71,1,1,1,1,'2017-05-24 00:49:28',NULL,NULL,'82',NULL,NULL,NULL,NULL,NULL,NULL),(72,1,1,1,1,'2017-05-24 01:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(73,1,1,1,1,'2017-05-24 02:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(74,1,1,1,1,'2017-05-24 03:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(75,1,1,1,1,'2017-05-24 04:49:28',NULL,NULL,'50',NULL,NULL,NULL,NULL,NULL,NULL),(76,1,1,1,1,'2017-05-24 05:49:28',NULL,NULL,'78',NULL,NULL,NULL,NULL,NULL,NULL),(77,1,1,1,1,'2017-05-24 06:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(78,1,1,1,1,'2017-05-24 07:49:28',NULL,NULL,'87',NULL,NULL,NULL,NULL,NULL,NULL),(79,1,1,1,1,'2017-05-24 08:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(80,1,1,1,1,'2017-05-24 09:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(81,1,1,1,1,'2017-05-24 10:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(82,1,1,1,1,'2017-05-24 11:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(83,1,1,1,1,'2017-05-24 12:49:28',NULL,NULL,'48',NULL,NULL,NULL,NULL,NULL,NULL),(84,1,1,1,1,'2017-05-24 13:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(85,1,1,1,1,'2017-05-24 14:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(86,1,1,1,1,'2017-05-24 15:49:28',NULL,NULL,'100',NULL,NULL,NULL,NULL,NULL,NULL),(87,1,1,1,1,'2017-05-24 16:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(88,1,1,1,1,'2017-05-24 17:49:28',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(89,1,1,1,1,'2017-05-24 18:49:28',NULL,NULL,'93',NULL,NULL,NULL,NULL,NULL,NULL),(90,1,1,1,1,'2017-05-24 19:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(91,1,1,1,1,'2017-05-24 20:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(92,1,1,1,1,'2017-05-24 21:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(93,1,1,1,1,'2017-05-24 22:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(94,1,1,1,1,'2017-05-24 23:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(95,1,1,1,1,'2017-05-25 00:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(96,1,1,1,1,'2017-05-25 01:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(97,1,1,1,1,'2017-05-25 02:49:28',NULL,NULL,'59',NULL,NULL,NULL,NULL,NULL,NULL),(98,1,1,1,1,'2017-05-25 03:49:28',NULL,NULL,'98',NULL,NULL,NULL,NULL,NULL,NULL),(99,1,1,1,1,'2017-05-25 04:49:28',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(100,1,1,1,1,'2017-05-25 05:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(101,1,1,1,1,'2017-05-25 06:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(102,1,1,1,1,'2017-05-25 07:49:28',NULL,NULL,'80',NULL,NULL,NULL,NULL,NULL,NULL),(103,1,1,1,1,'2017-05-25 08:49:28',NULL,NULL,'45',NULL,NULL,NULL,NULL,NULL,NULL),(104,1,1,1,1,'2017-05-25 09:49:28',NULL,NULL,'42',NULL,NULL,NULL,NULL,NULL,NULL),(105,1,1,1,1,'2017-05-25 10:49:28',NULL,NULL,'95',NULL,NULL,NULL,NULL,NULL,NULL),(106,1,1,1,1,'2017-05-25 11:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(107,1,1,1,1,'2017-05-25 12:49:28',NULL,NULL,'56',NULL,NULL,NULL,NULL,NULL,NULL),(108,1,1,1,1,'2017-05-25 13:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(109,1,1,1,1,'2017-05-25 14:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(110,1,1,1,1,'2017-05-25 15:49:28',NULL,NULL,'43',NULL,NULL,NULL,NULL,NULL,NULL),(111,1,1,1,1,'2017-05-25 16:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(112,1,1,1,1,'2017-05-25 17:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(113,1,1,1,1,'2017-05-25 18:49:28',NULL,NULL,'62',NULL,NULL,NULL,NULL,NULL,NULL),(114,1,1,1,1,'2017-05-25 19:49:28',NULL,NULL,'69',NULL,NULL,NULL,NULL,NULL,NULL),(115,1,1,1,1,'2017-05-25 20:49:28',NULL,NULL,'81',NULL,NULL,NULL,NULL,NULL,NULL),(116,1,1,1,1,'2017-05-25 21:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(117,1,1,1,1,'2017-05-25 22:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(118,1,1,1,1,'2017-05-25 23:49:28',NULL,NULL,'73',NULL,NULL,NULL,NULL,NULL,NULL),(119,1,1,1,1,'2017-05-26 00:49:28',NULL,NULL,'61',NULL,NULL,NULL,NULL,NULL,NULL),(120,1,1,1,1,'2017-05-26 01:49:28',NULL,NULL,'82',NULL,NULL,NULL,NULL,NULL,NULL),(121,1,1,1,1,'2017-05-26 02:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(122,1,1,1,1,'2017-05-26 03:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(123,1,1,1,1,'2017-05-26 04:49:28',NULL,NULL,'96',NULL,NULL,NULL,NULL,NULL,NULL),(124,1,1,1,1,'2017-05-26 05:49:28',NULL,NULL,'50',NULL,NULL,NULL,NULL,NULL,NULL),(125,1,1,1,1,'2017-05-26 06:49:28',NULL,NULL,'78',NULL,NULL,NULL,NULL,NULL,NULL),(126,1,1,1,1,'2017-05-26 07:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(127,1,1,1,1,'2017-05-26 08:49:28',NULL,NULL,'87',NULL,NULL,NULL,NULL,NULL,NULL),(128,1,1,1,1,'2017-05-26 09:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(129,1,1,1,1,'2017-05-26 10:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(130,1,1,1,1,'2017-05-26 11:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(131,1,1,1,1,'2017-05-26 12:49:28',NULL,NULL,'77',NULL,NULL,NULL,NULL,NULL,NULL),(132,1,1,1,1,'2017-05-26 13:49:28',NULL,NULL,'48',NULL,NULL,NULL,NULL,NULL,NULL),(133,1,1,1,1,'2017-05-26 14:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(134,1,1,1,1,'2017-05-26 15:49:28',NULL,NULL,'49',NULL,NULL,NULL,NULL,NULL,NULL),(135,1,1,1,1,'2017-05-26 16:49:28',NULL,NULL,'100',NULL,NULL,NULL,NULL,NULL,NULL),(136,1,1,1,1,'2017-05-26 17:49:28',NULL,NULL,'88',NULL,NULL,NULL,NULL,NULL,NULL),(137,1,1,1,1,'2017-05-26 18:49:28',NULL,NULL,'40',NULL,NULL,NULL,NULL,NULL,NULL),(138,1,1,1,1,'2017-05-26 19:49:28',NULL,NULL,'93',NULL,NULL,NULL,NULL,NULL,NULL),(139,1,1,1,1,'2017-05-26 20:49:28',NULL,NULL,'46',NULL,NULL,NULL,NULL,NULL,NULL),(140,1,1,1,1,'2017-05-26 21:49:28',NULL,NULL,'54',NULL,NULL,NULL,NULL,NULL,NULL),(141,1,1,1,1,'2017-05-26 22:49:28',NULL,NULL,'91',NULL,NULL,NULL,NULL,NULL,NULL),(142,1,1,1,1,'2017-05-26 23:49:28',NULL,NULL,'92',NULL,NULL,NULL,NULL,NULL,NULL),(143,1,1,1,1,'2017-05-27 00:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(144,1,1,1,1,'2017-05-27 01:49:28',NULL,NULL,'68',NULL,NULL,NULL,NULL,NULL,NULL),(145,1,1,1,1,'2017-05-27 02:49:28',NULL,NULL,'83',NULL,NULL,NULL,NULL,NULL,NULL),(146,1,1,1,1,'2017-05-27 03:49:28',NULL,NULL,'59',NULL,NULL,NULL,NULL,NULL,NULL),(147,1,1,1,1,'2017-05-27 04:49:28',NULL,NULL,'98',NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `CHARTEVENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `D_ITEMS`
--

DROP TABLE IF EXISTS `D_ITEMS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `D_ITEMS` (
  `ROW_ID` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `ITEMID` mediumint(8) unsigned NOT NULL,
  `LABEL` text,
  `ABBREVIATION` varchar(255) DEFAULT NULL,
  `DBSOURCE` varchar(255) DEFAULT NULL,
  `LINKSTO` varchar(255) DEFAULT NULL,
  `CATEGORY` varchar(255) DEFAULT NULL,
  `UNITNAME` varchar(255) DEFAULT NULL,
  `PARAM_TYPE` varchar(255) DEFAULT NULL,
  `CONCEPTID` varchar(255) DEFAULT NULL,
  UNIQUE KEY `D_ITEMS_ROW_ID` (`ROW_ID`),
  UNIQUE KEY `D_ITEMS_ITEMID` (`ITEMID`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `D_ITEMS`
--

LOCK TABLES `D_ITEMS` WRITE;
/*!40000 ALTER TABLE `D_ITEMS` DISABLE KEYS */;
INSERT INTO `D_ITEMS` VALUES (1,1,'heartrate',NULL,NULL,NULL,'1',NULL,NULL,NULL),(2,2,'blood_pressure',NULL,NULL,NULL,'1',NULL,NULL,NULL),(3,3,'MAP',NULL,NULL,NULL,'1',NULL,NULL,NULL),(4,4,'rhythm_status',NULL,NULL,NULL,'1',NULL,NULL,NULL),(5,5,'vasopressor',NULL,NULL,NULL,'1',NULL,NULL,NULL),(6,6,'inotropes',NULL,NULL,NULL,'1',NULL,NULL,NULL),(7,7,'GFR',NULL,NULL,NULL,'2',NULL,NULL,NULL),(8,8,'creatine',NULL,NULL,NULL,'2',NULL,NULL,NULL),(9,9,'BUN',NULL,NULL,NULL,'2',NULL,NULL,NULL),(10,10,'IO',NULL,NULL,NULL,'2',NULL,NULL,NULL),(11,11,'urine_output',NULL,NULL,NULL,'2',NULL,NULL,NULL),(12,12,'PT',NULL,NULL,NULL,'3',NULL,NULL,NULL),(13,13,'PTT',NULL,NULL,NULL,'3',NULL,NULL,NULL),(14,14,'INR',NULL,NULL,NULL,'3',NULL,NULL,NULL),(15,15,'direct_bilirubin',NULL,NULL,NULL,'3',NULL,NULL,NULL),(16,16,'indirect_bilirubin',NULL,NULL,NULL,'3',NULL,NULL,NULL),(17,17,'bilirubin_total',NULL,NULL,NULL,'3',NULL,NULL,NULL),(18,18,'AST',NULL,NULL,NULL,'3',NULL,NULL,NULL),(19,19,'ALT',NULL,NULL,NULL,'3',NULL,NULL,NULL),(20,20,'repiration_rate',NULL,NULL,NULL,'4',NULL,NULL,NULL),(21,21,'ventilator_status',NULL,NULL,NULL,'4',NULL,NULL,NULL),(22,22,'ventilator_settings',NULL,NULL,NULL,'4',NULL,NULL,NULL),(23,23,'PO2',NULL,NULL,NULL,'4',NULL,NULL,NULL),(24,24,'FiO2',NULL,NULL,NULL,'4',NULL,NULL,NULL),(25,25,'pH',NULL,NULL,NULL,'4',NULL,NULL,NULL),(26,26,'PCO2',NULL,NULL,NULL,'4',NULL,NULL,NULL),(27,27,'base_excess',NULL,NULL,NULL,'4',NULL,NULL,NULL),(28,28,'white_blood_cell_count',NULL,NULL,NULL,'5',NULL,NULL,NULL),(29,29,'lactate',NULL,NULL,NULL,'5',NULL,NULL,NULL),(30,30,'bands',NULL,NULL,NULL,'5',NULL,NULL,NULL),(31,31,'antibiotic_therapy',NULL,NULL,NULL,'5',NULL,NULL,NULL),(32,32,'temperature',NULL,NULL,NULL,'5',NULL,NULL,NULL),(33,33,'hemoglobin_anticoagulation',NULL,NULL,NULL,'5',NULL,NULL,NULL),(34,34,'hematocrit_anticoagulation',NULL,NULL,NULL,'5',NULL,NULL,NULL),(35,35,'transfusions',NULL,NULL,NULL,'5',NULL,NULL,NULL),(36,36,'glucose',NULL,NULL,NULL,'6',NULL,NULL,NULL),(37,37,'insulin_delivery',NULL,NULL,NULL,'6',NULL,NULL,NULL),(38,38,'hx_diabetes',NULL,NULL,NULL,'6',NULL,NULL,NULL),(39,39,'nutrition',NULL,NULL,NULL,'7',NULL,NULL,NULL),(40,40,'glasgow_coma_scale',NULL,NULL,NULL,'8',NULL,NULL,NULL),(41,41,'rass_score',NULL,NULL,NULL,'8',NULL,NULL,NULL),(42,42,'left_pupil_assessment',NULL,NULL,NULL,'8',NULL,NULL,NULL),(43,43,'right_pupil_assessment',NULL,NULL,NULL,'8',NULL,NULL,NULL),(44,44,'upper_extremeties_function',NULL,NULL,NULL,'8',NULL,NULL,NULL),(45,45,'lower_extremeties_function',NULL,NULL,NULL,'8',NULL,NULL,NULL),(46,46,'facial_droop',NULL,NULL,NULL,'8',NULL,NULL,NULL);
/*!40000 ALTER TABLE `D_ITEMS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ICUSTAYS`
--

DROP TABLE IF EXISTS `ICUSTAYS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ICUSTAYS` (
  `ROW_ID` smallint(5) unsigned NOT NULL,
  `SUBJECT_ID` mediumint(8) unsigned NOT NULL,
  `HADM_ID` mediumint(8) unsigned NOT NULL,
  `ICUSTAY_ID` mediumint(8) unsigned NOT NULL,
  `DBSOURCE` varchar(255) DEFAULT NULL,
  `FIRST_CAREUNIT` varchar(255) DEFAULT NULL,
  `LAST_CAREUNIT` varchar(255) DEFAULT NULL,
  `FIRST_WARDID` tinyint(3) unsigned DEFAULT NULL,
  `LAST_WARDID` tinyint(3) unsigned DEFAULT NULL,
  `INTIME` datetime NOT NULL,
  `OUTTIME` datetime DEFAULT NULL,
  `LOS` float DEFAULT NULL,
  UNIQUE KEY `ICUSTAYS_ROW_ID` (`ROW_ID`),
  UNIQUE KEY `ICUSTAYS_ICUSTAY_ID` (`ICUSTAY_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ICUSTAYS`
--

LOCK TABLES `ICUSTAYS` WRITE;
/*!40000 ALTER TABLE `ICUSTAYS` DISABLE KEYS */;
/*!40000 ALTER TABLE `ICUSTAYS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `PATIENTS`
--

DROP TABLE IF EXISTS `PATIENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `PATIENTS` (
  `ROW_ID` smallint(5) unsigned NOT NULL,
  `SUBJECT_ID` mediumint(8) unsigned NOT NULL,
  `GENDER` varchar(255) NOT NULL,
  `DOB` varchar(255) NOT NULL,
  `DOD` datetime DEFAULT NULL,
  `DOD_HOSP` datetime DEFAULT NULL,
  `DOD_SSN` datetime DEFAULT NULL,
  `EXPIRE_FLAG` tinyint(3) unsigned NOT NULL,
  UNIQUE KEY `PATIENTS_ROW_ID` (`ROW_ID`),
  UNIQUE KEY `PATIENTS_SUBJECT_ID` (`SUBJECT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `PATIENTS`
--

LOCK TABLES `PATIENTS` WRITE;
/*!40000 ALTER TABLE `PATIENTS` DISABLE KEYS */;
/*!40000 ALTER TABLE `PATIENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `REPORTS`
--

DROP TABLE IF EXISTS `REPORTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `REPORTS` (
  `REPORT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `PARENT_ID` varchar(30) DEFAULT NULL,
  `SQL_QUERY` text,
  `REPORT_PARAM` text,
  `DATABASE_NAME` varchar(30) DEFAULT NULL,
  `VIEWS` int(11) NOT NULL DEFAULT '0',
  `CREATED_AT` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `REPORT_NAME` varchar(64) DEFAULT NULL,
  `Category` varchar(64) DEFAULT NULL,
  `DESCRIPTION` text,
  `TYPE` int(11) DEFAULT NULL,
  `DISPLAY` int(3) DEFAULT NULL,
  PRIMARY KEY (`REPORT_ID`)
) ENGINE=MyISAM AUTO_INCREMENT=318 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `REPORTS`
--

LOCK TABLES `REPORTS` WRITE;
/*!40000 ALTER TABLE `REPORTS` DISABLE KEYS */;
INSERT INTO `REPORTS` VALUES (1,'','select * from D_ITEMS ','{\"LABEL\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"LABEL\", \"DEFAULT\":\"\", \"OPERATOR\":\"LIKE\"}}','mimiciiiv13',0,'2017-05-28 06:38:38','D_ITEMS ','MIMIC','<!--HTML-->THE ITEMID LINKS TO:<ui> <li>CHARTEVENTS on ITEMID</li> <li>DATETIMEEVENTS on ITEMID</li> <li>INPUTEVENTS_CV on ITEMID</li> <li>INPUTEVENTS_MV on ITEMID</li> <li>MICROBIOLOGYEVENTS on ITEMID</li> <li>OUTPUTEVENTS on ITEMID</li> <li>PROCEDUREEVENTS_MV on ITEMID</li> <ui>',1,1),(2,NULL,'SELECT d.ICD9_CODE, d.SHORT_TITLE, d.LONG_TITLE, cou.counts , (CASE WHEN cou.counts >0  THEN CONCAT(\"<a href=\'http:./reportingtool?ICD9_CODE=\",d.ICD9_CODE,\"&REPORT_ID=4\'>Report link</a>\") ElSE \'-\'  end) as Report_link FROM mimiciiiv13.D_ICD_DIAGNOSES d left join ( select ICD9_CODE,count(*)as counts from diagnoses_icd where ICD9_CODE is not null group by ICD9_CODE  ) cou on cou.ICD9_CODE=d.ICD9_CODE','{\"SHORT_TITLE\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SHORT_TITLE\", \"DEFAULT\":\"\", \"OPERATOR\":\"LIKE\"},\"LONG_TITLE\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"LONG_TITLE\", \"DEFAULT\":\"\", \"OPERATOR\":\"LIKE\"}}','mimiciiiv13',0,'2017-05-28 07:37:44','DIAGNOSIS_ICD9_CODES','MIMIC','<!--HTML--><ui>\n<li>This table defines International Classification of Diseases Version 9 (ICD-9) codes for diagnoses. These codes are assigned at the end of the patient’s stay and are used by the hospital to bill for care provided. </li>\n<li>Reports_link this links to all the patients found in DIAGNOSES_ICD</li>\n<li>Counts specifies the number of patients who were diagnose with the ICD9_CODE</li>\n</ui>',1,1),(3,NULL,'Select REPORT_NAME, CONCAT(\"<a href=\'http:./reportingtool?REPORT_ID=\",REPORT_ID,\"\'>Report link</a>\") as Report_link, DATABASE_NAME, Category, DESCRIPTION from REPORTS where DISPLAY=1',NULL,'iEXPLORECC',0,'2017-06-01 19:16:46','Reports Dashboard','MIMIC','<!--HTML-->This Contains All the Reports.',1,NULL),(4,'2','select d.SUBJECT_ID, d.HADM_ID, d.SEQ_NUM, d.ICD9_CODE, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",d.SUBJECT_ID,\"&HADM_ID=\",d.HADM_ID,\"&REPORT_ID=5\'>CHARTEVETNS Report link</a>\") as CHARTEVENTS_LINK, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",d.SUBJECT_ID,\"&HADM_ID=\",d.HADM_ID,\"&REPORT_ID=7\'>LABEVENTS link</a>\") as LABEVENTS_LINK, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",d.SUBJECT_ID,\"&HADM_ID=\",d.HADM_ID,\"&REPORT_ID=9\'>INPUT_EVENTS_CV link</a>\") as INPUTEVENTS_CV_LINK, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",d.SUBJECT_ID,\"&HADM_ID=\",d.HADM_ID,\"&REPORT_ID=11\'>INPUT_EVENTS_MV link</a>\") as INPUTEVENTS_MV_LINK , CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",d.SUBJECT_ID,\"&HADM_ID=\",d.HADM_ID,\"&REPORT_ID=13\'>OUTPUT_EVENTS link</a>\") as OUTPUREVENTS_LINK, DATE_FORMAT(a.ADMITTIME,\'%Y-%m-%d\') as `ADMISSION DATE`, DATE_FORMAT(a.ADMITTIME,\'%T\') as `ADMISSION TIME`, DATE_FORMAT(a.DISCHTIME,\'%Y-%m-%d\') as `DISCHARGE DATE`, DATE_FORMAT(a.DISCHTIME,\'%T\') as `DISCHARGE TIME`,DATE_FORMAT(a.DEATHTIME,\'%Y-%m-%d\') as `DEATH DATE`, DATE_FORMAT(a.DEATHTIME,\'%T\') as `DEATH TIME`, a.ADMISSION_TYPE,a.ADMISSION_LOCATION,a.DISCHARGE_LOCATION,a.INSURANCE,a.LANGUAGE,a.RELIGION,a.MARITAL_STATUS,a.ETHNICITY,a.EDREGTIME,a.EDOUTTIME,a.DIAGNOSIS,a.HOSPITAL_EXPIRE_FLAG,a.HAS_CHARTEVENTS_DATA from diagnoses_icd d left join ADMISSIONS a on a.HADM_ID=d.HADM_ID and a.SUBJECT_ID=d.SUBJECT_ID  l?l;','{\"ICD9_CODE\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ICD9_CODE\", \"DEFAULT\":\"\", \"OPERATOR\":\"LIKE\"}}','mimiciiiv13',0,'2017-06-05 13:47:40','Patients Based on ICD9_CODES','MIMIC','<!--HTML--><ui>\n<li>This table contains all the patients with a specific ICD9_Code</li>\n<li>SUBJECT_ID, HADM_ID: Identifiers which specify the patient: SUBJECT_ID is unique to a patient and HADM_ID is unique to a patient hospital stay.</li>\n<li>SEQ_NUM:provides the order in which the ICD diagnoses relate to the patient. ICD diagnoses are ordered by priority - and the order does have an impact on the reimbursement for treatment.</li>\n<li>ICD9_CODE:contains the actual code corresponding to the diagnosis assigned to the patient for the given row. Note that all codes, as of MIMIC-III v1.0, are ICD-9 codes.</li>\n<li>CHARTEVENTS_LINK:  Contains all charted data for all patients.</li>\n<li>LABEVENTS_LINK: Contains all laboratory measurements for a given patient, including out patient data.</li>\n<li>INPUTEVENTS_CV_LINK: Input data for patients. <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Info</a></li>\n<li>INPUTEVENTS_MV_LINK:Input data for patients. <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Info</a></li>\n<li>OUTPUREVENTS_LINK:Output data for patients. <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Info</a></li>\n<li>ADMITTIME,DISCHTIME,DEATHTIME,ADMISSION_TYPE,ADMISSION_LOCATION,DISCHARGE_LOCATION,INSURANCE,LANGUAGE,RELIGION,MARITAL_STATUS,<br>ETHNICITY,EDREGTIME,EDOUTTIME,DIAGNOSIS,HOSPITAL_EXPIRE_FLAG,HAS_CHARTEVENTS_DATA contain genral in formation about patient</li>\n<li>For more Information got to :</li>\n<li><a href=\'https://mimic.physionet.org/mimictables/diagnoses_icd/\'>Diagnoses_icd</a></li>\n<li><a href=\'https://mimic.physionet.org/mimictables/diagnoses_icd/\'>Admissions</a></li>\n</ui>\n',2,NULL),(5,'4','select cou.ITEMID, cou.counts, LABEL, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",SUBJECT_ID,\"&HADM_ID=\",HADM_ID,\"&REPORT_ID=6&ITEMID=\",cou.ITEMID,\"\'>Report link</a>\") as REPORT_LINK,ABBREVIATION, DBSOURCE, CATEGORY, PARAM_TYPE from (SELECT ITEMID, SUBJECT_ID, HADM_ID, count(*) as counts FROM CHARTEVENTS l?l group by ITEMID) cou left join D_ITEMS d on d.ITEMID=cou.ITEMID ','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-05 19:25:47','CHARTEVENTS ITEMIDS of SPECIFIC PATIENTS','MIMIC','<!--HTML--><ul>\n<li>This Report contains  all charted data for the given patient(on the basis of PatientID, SubjectID)</li>\n<li>All Rows are grouped on the basis of the ITEMID</li>\n<li>The counts specivies the number of times the a specific ITEM was charted</li>\n</ul>',2,NULL),(6,'5','SELECT ROW_ID,SUBJECT_ID,HADM_ID,ICUSTAY_ID,ITEMID,DATE_FORMAT(CHARTTIME,\'%Y-%m-%d\') as `CHART DATE`, DATE_FORMAT(CHARTTIME,\'%T\') as `CHART TIME`,DATE_FORMAT(STORETIME,\'%Y-%m-%d\') as `STORE DATE`, DATE_FORMAT(STORETIME,\'%T\') as `STORE TIME`,CGID,VALUE,VALUENUM,VALUEUOM,WARNING,ERROR,RESULTSTATUS,STOPPED  FROM CHARTEVENTS','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}, \"ITEMID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ITEMID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-05 20:07:24','CHARTEVENTS of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML--><ui>\n<li>CHARTEVENTS contains all the charted data available for a patient. During their ICU stay, the primary repository of a patient’s information is their <br>electronic chart. The electronic chart displays patients’ routine vital signs and any additional information relevant to their care: ventilator settings,<br> laboratory values, code status, mental status, and so on. As a result, the bulk of information about a patient’s stay is contained in CHARTEVENTS. <br>Furthermore, even though laboratory values are captured elsewhere (LABEVENTS), they are frequently repeated within CHARTEVENTS. This occurs because it is <br>desirable to display the laboratory values on the patient’s electronic chart, and so the values are copied from the database storing laboratory values <br>to the database storing the CHARTEVENTS.</li>\n<li>Links to:</li>\n<li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>ICUSTAYS on ICUSTAY_ID</li>\n<li>D_ITEMS on ITEMID</li>\n<li>CAREGIVERS on CGID</li>\n<li><a href=\"https://mimic.physionet.org/mimictables/chartevents/\">For More Information</a></li>\n</ui>',1,NULL),(7,'4','select cou.ITEMID, cou.counts, LABEL, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",SUBJECT_ID,\"&HADM_ID=\",HADM_ID,\"&REPORT_ID=8&ITEMID=\",cou.ITEMID,\"\'>Report link</a>\") as REPORT_LINK,FLUID,CATEGORY,LOINC_CODE from (SELECT ITEMID, SUBJECT_ID, HADM_ID, count(*) as counts FROM LABEVENTS l?l group by ITEMID) cou left join D_LABITEMS d on d.ITEMID=cou.ITEMID ','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 15:53:25','LABEVENTS ITEMIDS of SPECIFIC PATIENTS','MIMIC','<!--HTML--><ul> <li>This Report contains  all laboratory measurements data for the given patient(on the basis of PatientID, SubjectID)</li> <li>All Rows are grouped on the basis of the ITEMID</li> <li>The counts specivies the number of times the a specific ITEM(LAB Measurement) was taken </li> </ul>',2,NULL),(8,'7','SELECT ROW_ID,SUBJECT_ID,HADM_ID,ITEMID,DATE_FORMAT(CHARTTIME,\'%Y-%m-%d\') as `CHART DATE`, DATE_FORMAT(CHARTTIME,\'%T\') as `CHART TIME`,VALUE,VALUENUM,VALUEUOM,FLAG  FROM LABEVENTS','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}, \"ITEMID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ITEMID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 16:40:50','LABEVENTS of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML--><ui> <li>The LABEVENTS data contains information regarding laboratory based measurements. The process for acquiring a lab measurement is as follows: first, a <br>member of the clinical staff acquires a fluid from a site in the patient’s body (e.g. blood from an arterial line, urine from a catheter, etc). Next, the<br> fluid is bar coded to associate it with the patient and timestamped to record the time of the fluid acquisition. The lab analyses the data and returns <br> a result within 4-12 hours.\n</li> <li>Links to:</li>\n <li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>D_LABITEMS on ITEMID</li>\n<li> <a href=\"https://mimic.physionet.org/mimictables/labevents/\">For More Information</a></li> </ui>\n\n',1,NULL),(9,'4','select cou.ITEMID, cou.counts, LABEL, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",SUBJECT_ID,\"&HADM_ID=\",HADM_ID,\"&REPORT_ID=10&ITEMID=\",cou.ITEMID,\"\'>Report link</a>\") as REPORT_LINK,ABBREVIATION, DBSOURCE, CATEGORY, PARAM_TYPE from (SELECT ITEMID, SUBJECT_ID, HADM_ID, count(*) as counts FROM INPUTEVENTS_CV l?l group by ITEMID) cou left join D_ITEMS d on d.ITEMID=cou.ITEMID ','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:11:21','INPUTEVENTS_CV ITEMIDS of SPECIFIC PATIENTS','MIMIC','<!--HTML--> <ui> <li>Table source: CareVue ICU databases.</li> <li>Table purpose: Input data for patients.</li> <li>Links to:</li> <li>PATIENTS on SUBJECT_ID</li> <li>ADMISSIONS on HADM_ID</li> <li>ICUSTAYS on ICUSTAY_ID</li> <li>D_ITEMS on ITEMID</li> <li>CAREGIVERS on CGID</li> <li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li></ui>',2,NULL),(10,'9','SELECT ROW_ID,SUBJECT_ID,HADM_ID,ICUSTAY_ID,DATE_FORMAT(CHARTTIME,\'%Y-%m-%d\') as `CHART DATE`, DATE_FORMAT(CHARTTIME,\'%T\') as `CHART TIME`, ITEMID,AMOUNT,AMOUNTUOM,RATE,RATEUOM,DATE_FORMAT(STORETIME,\'%Y-%m-%d\') as `STORE DATE`, DATE_FORMAT(STORETIME,\'%T\') as `STORE TIME`, CGID,ORDERID,LINKORDERID,STOPPED,NEWBOTTLE,ORIGINALAMOUNT,ORIGINALAMOUNTUOM,ORIGINALROUTE,ORIGINALRATE,ORIGINALRATEUOM,ORIGINALSITE FROM INPUTEVENTS_CV','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}, \"ITEMID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ITEMID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:20:37','INPUTEVENTS_CV of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML--> <ui> <li>Table source: CareVue ICU databases.</li> <li>Table purpose: Input data for patients.</li> <li>Links to:</li> <li>PATIENTS on SUBJECT_ID</li> <li>ADMISSIONS on HADM_ID</li> <li>ICUSTAYS on ICUSTAY_ID</li> <li>D_ITEMS on ITEMID</li> <li>CAREGIVERS on CGID</li> <li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li></ui>',1,NULL),(11,'4','select cou.ITEMID, cou.counts, LABEL, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",SUBJECT_ID,\"&HADM_ID=\",HADM_ID,\"&REPORT_ID=12&ITEMID=\",cou.ITEMID,\"\'>Report link</a>\") as REPORT_LINK,ABBREVIATION, DBSOURCE, CATEGORY, PARAM_TYPE from (SELECT ITEMID, SUBJECT_ID, HADM_ID, count(*) as counts FROM INPUTEVENTS_MV l?l group by ITEMID) cou left join D_ITEMS d on d.ITEMID=cou.ITEMID ','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:24:50','INPUTEVENTS_MV of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML-->\n<ui>\n<li>Table source: MetaVision ICU databases.</li>\n<li>Table purpose: Input data for patients.</li>\n<li>Links to:</li>\n<li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>ICUSTAYS on ICUSTAY_ID</li>\n<li>D_ITEMS on ITEMID</li>\n<li>CAREGIVERS on CGID</li>\n<li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li>\n</ui>',2,NULL),(12,'11','SELECT ROW_ID,SUBJECT_ID,HADM_ID,ICUSTAY_ID,DATE_FORMAT(STARTTIME\'%Y-%m-%d\') as `START DATE`, DATE_FORMAT(STARTTIME\'%T\') as `START TIME`, DATE_FORMAT(ENDTIME,\'%Y-%m-%d\') as `END DATE`, DATE_FORMAT(ENDTIME,\'%T\') as `END TIME`,ITEMID,AMOUNT,AMOUNTUOM,RATE,RATEUOM, STORETIME,DATE_FORMAT(STORETIME,\'%Y-%m-%d\') as `STORE DATE`, DATE_FORMAT(STORETIME,\'%T\') as `STORE TIME`, CGID,ORDERID,LINKORDERID,ORDERCATEGORYNAME,SECONDARYORDERCATEGORYNAME,ORDERCOMPONENTTYPEDESCRIPTION,ORDERCATEGORYDESCRIPTION,PATIENTWEIGHT,TOTALAMOUNT,TOTALAMOUNTUOM,ISOPENBAG,CONTINUEINNEXTDEPT,CANCELREASON,STATUSDESCRIPTION,COMMENTS_EDITEDBY,COMMENTS_CANCELEDBY,COMMENTS_DATE,ORIGINALAMOUNT,ORIGINALRATE FROM INPUTEVENTS_MV','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}, \"ITEMID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ITEMID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:39:09','INPUTEVENTS_MV of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML-->\n<ui>\n<li>Table source: MetaVision ICU databases.</li>\n<li>Table purpose: Input data for patients.</li>\n<li>Links to:</li>\n<li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>ICUSTAYS on ICUSTAY_ID</li>\n<li>D_ITEMS on ITEMID</li>\n<li>CAREGIVERS on CGID</li>\n<li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li>\n</ui>',1,NULL),(13,'4','select cou.ITEMID, cou.counts, LABEL, CONCAT(\"<a href=\'http:./reportingtool?SUBJECT_ID=\",SUBJECT_ID,\"&HADM_ID=\",HADM_ID,\"&REPORT_ID=14&ITEMID=\",cou.ITEMID,\"\'>Report link</a>\") as REPORT_LINK,ABBREVIATION, DBSOURCE, CATEGORY, PARAM_TYPE from (SELECT ITEMID, SUBJECT_ID, HADM_ID, count(*) as counts FROM OUTPUTEVENTS l?l group by ITEMID) cou left join D_ITEMS d on d.ITEMID=cou.ITEMID ','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:45:50','OUTPUTEVENTS ITEMIDS of SPECIFIC PATIENTS','MIMIC','<!--HTML-->\n<ui>\n<li>Table source: MetaVision and CareVue ICU databases.</li>\n<li>Table purpose: Input data for patients.</li>\n<li>Links to:</li>\n<li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>ICUSTAYS on ICUSTAY_ID</li>\n<li>D_ITEMS on ITEMID</li>\n<li>CAREGIVERS on CGID</li>\n<li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li>\n</ui>\n',2,NULL),(14,'13','SELECT ROW_ID,SUBJECT_ID,HADM_ID,ICUSTAY_ID,DATE_FORMAT(CHARTTIME,\'%Y-%m-%d\') as `CHART DATE`, DATE_FORMAT(CHARTTIME,\'%T\') as `CHART TIME`,ITEMID,VALUE,VALUEUOM, DATE_FORMAT(STORETIME,\'%Y-%m-%d\') as `STORE DATE`, DATE_FORMAT(STORETIME,\'%T\') as `STORE TIME`, CGID,STOPPED,NEWBOTTLE,ISERROR  FROM OUTPUTEVENTS','{\"HADM_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"HADM_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"},\"SUBJECT_ID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"SUBJECT_ID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}, \"ITEMID\":{ \"INPUT_TYPE\":\"TEXT\", \"NAME\":\"ITEMID\", \"DEFAULT\":\"\", \"OPERATOR\":\"EQUAL\"}}','mimiciiiv13',0,'2017-06-06 17:55:30','OUTEVENTS of SPECIFIC PATIENTS and ITEMID','MIMIC','<!--HTML-->\n<ui>\n<li>Table source: MetaVision and CareVue ICU databases.</li>\n<li>Table purpose: Input data for patients.</li>\n<li>Links to:</li>\n<li>PATIENTS on SUBJECT_ID</li>\n<li>ADMISSIONS on HADM_ID</li>\n<li>ICUSTAYS on ICUSTAY_ID</li>\n<li>D_ITEMS on ITEMID</li>\n<li>CAREGIVERS on CGID</li>\n<li> <a href=\"https://mimic.physionet.org/mimicdata/io/\">For More Information</a></li>\n</ui>\n',1,NULL),(15,NULL,'select * from(\nselect patient_id , avg(bg_reading) as `Mean POC`, stddev(bg_reading) as `MSD POC` from glycus where bg_reading is not null group by patient_id\n) poc left join (\nselect patient_id , avg(sensor_glucose) as `Mean CGM`, stddev(sensor_glucose) as `MSD CGM` from glycus where sensor_glucose is not null group by patient_id\n) cgm\non poc.patient_id=cgm.patient_id',NULL,'glycus',0,'2017-06-08 16:41:19','Mean Blood Glucose: patient_id vs MBG in each patient','glycus',NULL,1,-1),(16,NULL,'sql_query = results[0].SQL_QUERY;\n						report_params = JSON.parse(results[0].REPORT_PARAM);\n\n						var conditions = [];\n						Object.keys(where).forEach(function(key) {\n							if (key != \'REPORT_ID\' && where[key].length > 0) {\n								conditions.push(key);\n							}\n						});\n						var flag = 0;\n						var where_claues = \'\';\n						if (conditions.length > 0) {\n							conditions.forEach(function(key) {\n								if (flag == 0) {\n									flag = 1;\n									where_claues = where_claues + \' where\'\n									sql_query = sql_query + \' where\';\n								} else {\n									sql_query = sql_query + \' and\';\n									where_claues = where_claues + \' and\'\n								}\n								if (report_params[key].OPERATOR === \'LIKE\') {\n									//todo trim the where[key] before checkoint\n									sql_query = sql_query + \" \" + key + \" LIKE \'%\" + where[key] + \"%\'\";\n									where_claues = where_claues + \" \" + key + \" LIKE \'%\" + where[key] + \"%\'\"\n								}\n								if (report_params[key].OPERATOR === \'EQUAL\') {\n									//todo trim the where[key] before checkoint\n									sql_query = sql_query + \" \" + key + \" = \" + where[key] + \" \";\n									where_claues = where_claues + \" \" + key + \"=\" + where[key] + \" \"\n								}\n							})\n						}\n						if (results[0].TYPE == 1) {\n							results[0].SQL_QUERY = sql_query;\n							sql_query = sql_query + \' limit 20000\';\n						} else {\n							results[0].SQL_QUERY = \"SELECT * FROM mimiciiiv13.LABEVENTS where ITEMID=50920 limit 10\";\n						}\n\n						ReportsModel.getReport(results[0], function(err, resultsReport) {\n							if (err) {\n								callback(err);\n								return;\n							}\n							var res = {};\n\n\n							res.name = results[0].REPORT_NAME;\n							res.description = results[0].DESCRIPTION;\n							if (results[0].REPORT_PARAM == null) {\n								res.params = {};\n							} else {\n\n								res.params = JSON.parse(results[0].REPORT_PARAM);\n							}\n\n							res.data = resultsReport;\n\n\n							return callback(null, res);\n						}) ',NULL,'mimiciiiv13',0,'2017-06-09 16:26:53','TEST REPORT',NULL,NULL,3,1);
/*!40000 ALTER TABLE `REPORTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `book` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES (1,'ECMAScript 2015: A SitePoint Anthology','[\"JavaScript\", \"ES2015\", \"JSON\"]');
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-06  8:27:24
