-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2021 at 09:04 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `word_quizzer`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `answer_ID` int(11) NOT NULL,
  `question_ID` varchar(191) NOT NULL,
  `answer` varchar(255) NOT NULL,
  `question_order` int(11) NOT NULL,
  `is_correct` enum('0','1') NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`answer_ID`, `question_ID`, `answer`, `question_order`, `is_correct`) VALUES
(149, 'Qtest1181', 'an assortment of various samples', 1, '1'),
(150, 'Qtest1181', 'oral religious instruction (as before baptism or confirmation)', 1, '0'),
(151, 'Qtest1182', 'passing or having passed from the solid to the gaseous state (or vice versa) without becoming liquid', 2, '1'),
(152, 'Qtest1182', 'characteristic of or suffering from kyphosis, an abnormality of the vertebral column', 2, '0'),
(153, 'Qtest1183', 'the act of indulging or gratifying a desire', 3, '1'),
(154, 'Qtest1183', 'punishment of a group by cutting off commercial dealings with them', 3, '0'),
(155, 'Qtest1184', 'the musical director of a choir', 4, '1'),
(156, 'Qtest1184', 'a hat made of felt with a creased crown', 4, '0'),
(157, 'Qtest2181', '(of an organ or body part) diminished in size or strength as a result of disease or injury or lack of use', 1, '1'),
(158, 'Qtest2181', 'almost not', 1, '0'),
(159, 'Qtest2182', 'make into a demon', 2, '1'),
(160, 'Qtest2182', 'cottonwood of western North America with dark green leaves shining above and rusty or silvery beneath', 2, '0'),
(161, 'Qtest2183', 'in a strange but not unpleasant manner', 3, '1'),
(162, 'Qtest2183', 'in a creaky manner', 3, '0'),
(163, 'Qtest2184', 'travel via aircraft', 4, '1'),
(164, 'Qtest2184', 'the language of the Khalkha that is the official language of the Mongolian People\'s Republic', 4, '0'),
(237, 'Qquiz1181', 'releasing or activated by acetylcholine or a related compound', 1, '1'),
(238, 'Qquiz1181', 'affected by emotion as if by electricity; thrilling', 1, '0'),
(239, 'Qquiz1181', 'not lubricated', 1, '0'),
(240, 'Qquiz1181', 'a person who makes garments', 1, '0'),
(241, 'Qquiz1182', 'someone who takes the place of another person', 2, '1'),
(242, 'Qquiz1182', '(1568) Catholic forces supporting Mary Queen of Scots were routed by Protestants', 2, '0'),
(243, 'Qquiz1182', 'long and slender with a very small internal diameter', 2, '0'),
(244, 'Qquiz1182', 'travel by getting free rides from motorists', 2, '0'),
(245, 'Qquiz1183', 'vermifuge used to treat infestations by roundworms or pinworms', 3, '1'),
(246, 'Qquiz1183', 'relating to or characteristic of the Moors', 3, '0'),
(247, 'Qquiz1183', 'English actor of Shakespearean roles who was also noted for appearances in films (1904-2000)', 3, '0'),
(248, 'Qquiz1183', 'terrestrial Siberian squirrel', 3, '0'),
(249, 'Qquiz1184', '(biology) any agency bringing about activation; a molecule that increases the activity of an enzyme or a protein that increases the production of a gene product in DNA transcription', 4, '1'),
(250, 'Qquiz1184', 'belonging to or characteristic of the nobility or aristocracy', 4, '0'),
(251, 'Qquiz1184', 'perennial herbs of Europe and Iran; make rapidly growing groundcover for shaded areas', 4, '0'),
(252, 'Qquiz1184', 'shed at an early stage of development', 4, '0'),
(253, 'Qquiz1185', 'a drink credited with magical power; can make the one who takes it love the one who gave it', 5, '1'),
(254, 'Qquiz1185', 'the act of taking of a person by force', 5, '0'),
(255, 'Qquiz1185', 'a musician who plays the trumpet or cornet', 5, '0'),
(256, 'Qquiz1185', 'the quality of being reproducible in amount or performance', 5, '0'),
(257, 'Qquiz1186', 'great coolness and composure under strain', 6, '1'),
(258, 'Qquiz1186', 'load anew', 6, '0'),
(259, 'Qquiz1186', 'designed to activate or move or regulate itself', 6, '0'),
(260, 'Qquiz1186', 'any of various drugs that block alpha-adrenergic receptors; used in treating benign prostatic hyperplasia; relaxes the muscles of the prostate and bladder', 6, '0'),
(261, 'Qquiz1187', 'the agency of the Treasury Department that enforces import tariffs', 7, '1'),
(262, 'Qquiz1187', '(frequently plural) an expense not budgeted or not specified', 7, '0'),
(263, 'Qquiz1187', 'marine and freshwater green or colorless flagellate organism', 7, '0'),
(264, 'Qquiz1187', 'a major part of the central nervous system which conducts sensory and motor nerve impulses to and from the brain; a long tubelike structure extending from the base of the brain through the vertebral canal to the upper lumbar region', 7, '0'),
(265, 'Qquiz1188', 'advancement toward better conditions or policies or methods', 8, '1'),
(266, 'Qquiz1188', 'Australian bustard', 8, '0'),
(267, 'Qquiz1188', 'the form of ratbite fever occurring in the Far East', 8, '0'),
(268, 'Qquiz1188', 'surgical procedure that creates an opening from the ileum through the abdominal wall to function as an anus; performed in cases of cancer of the colon or ulcerative colitis', 8, '0'),
(269, 'Qquiz1189', 'a drug (trade name Atabrine) used to treat certain worm infestations and once used to treat malaria', 9, '1'),
(270, 'Qquiz1189', 'having sections or patches colored differently and usually brightly', 9, '0'),
(271, 'Qquiz1189', 'marked with an asterisk', 9, '0'),
(272, 'Qquiz1189', 'cut or make a notch into', 9, '0'),
(273, 'Qquiz11810', 'soup cooked in a large pot', 10, '1'),
(274, 'Qquiz11810', 'a large sleeping room containing several beds', 10, '0'),
(275, 'Qquiz11810', 'a toxin that is secreted by microorganisms into the surrounding medium', 10, '0'),
(276, 'Qquiz11810', 'the membrane that lines the cavities of the heart and forms part of the heart valves', 10, '0'),
(277, 'Qquiz2181', 'devoid of good sense or judgment', 1, '1'),
(278, 'Qquiz2181', 'cause to lose one\'s composure', 1, '0'),
(279, 'Qquiz2182', 'graceful deciduous shrub or small tree having attractive foliage and small red berries that turn black at maturity and are used for making wine', 2, '1'),
(280, 'Qquiz2182', 'a dentist specializing in diseases of the gums and other structure surrounding the teeth', 2, '0'),
(281, 'Qquiz2183', 'Flemish painter who was a founder of the Flemish school of painting and who pioneered modern techniques of oil painting (1390-1441)', 3, '1'),
(282, 'Qquiz2183', 'dementia observed during the last stages of severe chronic alcoholism; involves loss of memory for recent events although long term memory is intact', 3, '0'),
(283, 'Qquiz2184', 'any obstruction that impedes or is burdensome', 4, '1'),
(284, 'Qquiz2184', 'aspect with regard to the beginning of the action of the verb', 4, '0');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_ID` varchar(191) NOT NULL,
  `quiz_ID` varchar(191) NOT NULL,
  `question` varchar(255) NOT NULL,
  `word` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_ID`, `quiz_ID`, `question`, `word`, `created_at`) VALUES
('Qquiz1181', 'quiz1', 'What does cholinergic (null) mean?', 'cholinergic', '2021-01-13 19:38:54'),
('Qquiz11810', 'quiz1', 'How would you define marmite (noun)?', 'marmite', '2021-01-13 19:38:54'),
('Qquiz1182', 'quiz1', 'How would you define surrogate (noun)?', 'surrogate', '2021-01-13 19:38:54'),
('Qquiz1183', 'quiz1', 'How to define piperazine (noun)?', 'piperazine', '2021-01-13 19:38:54'),
('Qquiz1184', 'quiz1', 'What does activator (noun) mean?', 'activator', '2021-01-13 19:38:54'),
('Qquiz1185', 'quiz1', 'What is the definition of philtre (noun)?', 'philtre', '2021-01-13 19:38:54'),
('Qquiz1186', 'quiz1', 'How to define aplomb (noun)?', 'aplomb', '2021-01-13 19:38:54'),
('Qquiz1187', 'quiz1', 'What is the meaning of uscb (noun)?', 'uscb', '2021-01-13 19:38:54'),
('Qquiz1188', 'quiz1', 'What is the definition of progressivity (noun)?', 'progressivity', '2021-01-13 19:38:54'),
('Qquiz1189', 'quiz1', 'How to define mepacrine (noun)?', 'mepacrine', '2021-01-13 19:38:54'),
('Qquiz2181', 'quiz2', 'What does foolish (adjective) mean?', 'foolish', '2021-01-14 17:47:17'),
('Qquiz2182', 'quiz2', 'What is the meaning of aristotelia serrata (noun)?', 'aristotelia serrata', '2021-01-14 17:47:17'),
('Qquiz2183', 'quiz2', 'What does eyck (noun) mean?', 'eyck', '2021-01-14 17:47:17'),
('Qquiz2184', 'quiz2', 'How to define preventive (noun)?', 'preventive', '2021-01-14 17:47:17'),
('Qtest1181', 'test1', 'What is the definition of sampler (noun)?', 'sampler', '2021-01-10 21:42:27'),
('Qtest1182', 'test1', 'What does sublimed (adjective) mean?', 'sublimed', '2021-01-10 21:42:27'),
('Qtest1183', 'test1', 'How to define humoring (noun)?', 'humoring', '2021-01-10 21:42:27'),
('Qtest1184', 'test1', 'How would you define choirmaster (noun)?', 'choirmaster', '2021-01-10 21:42:27'),
('Qtest2181', 'test2', 'What is the definition of atrophied (adjective)?', 'atrophied', '2021-01-11 02:10:16'),
('Qtest2182', 'test2', 'How would you define demonise (verb)?', 'demonise', '2021-01-11 02:10:16'),
('Qtest2183', 'test2', 'How would you define quaintly (null)?', 'quaintly', '2021-01-11 02:10:16'),
('Qtest2184', 'test2', 'What is the meaning of aviation (noun)?', 'aviation', '2021-01-11 02:10:16');

-- --------------------------------------------------------

--
-- Table structure for table `quiz`
--

CREATE TABLE `quiz` (
  `quiz_id` int(11) NOT NULL,
  `quiz_name` varchar(191) NOT NULL,
  `quiz_type` varchar(255) NOT NULL,
  `quiz_answers` int(11) UNSIGNED DEFAULT NULL,
  `quiz_questions` int(11) UNSIGNED DEFAULT NULL,
  `quiz_theme` varchar(255) NOT NULL DEFAULT 'default',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `score` int(3) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `quiz`
--

INSERT INTO `quiz` (`quiz_id`, `quiz_name`, `quiz_type`, `quiz_answers`, `quiz_questions`, `quiz_theme`, `created_at`, `updated_at`, `score`, `user_id`) VALUES
(36, 'test1', 'definitions', 2, 4, 'default', '2021-01-10 21:42:05', '2021-01-28 19:52:33', 25, NULL),
(37, 'test2', 'definitions', 2, 4, 'default', '2021-01-11 02:09:54', '2021-01-25 21:36:30', 0, NULL),
(45, 'quiz1', 'definitions', 4, 10, 'defaultf', '2021-01-13 19:37:49', '2021-01-27 16:55:24', 20, NULL),
(46, 'quiz2', 'definitions', 2, 4, 'default', '2021-01-14 17:47:05', '2021-01-23 20:11:32', 25, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(191) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`answer_ID`),
  ADD KEY `question_ID` (`question_ID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_ID`),
  ADD KEY `quiz_ID` (`quiz_ID`);

--
-- Indexes for table `quiz`
--
ALTER TABLE `quiz`
  ADD PRIMARY KEY (`quiz_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `quiz_name` (`quiz_name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `answer_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=493;

--
-- AUTO_INCREMENT for table `quiz`
--
ALTER TABLE `quiz`
  MODIFY `quiz_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=142;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_ID`) REFERENCES `questions` (`question_ID`) ON DELETE CASCADE;

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`quiz_ID`) REFERENCES `quiz` (`quiz_name`) ON DELETE CASCADE;

--
-- Constraints for table `quiz`
--
ALTER TABLE `quiz`
  ADD CONSTRAINT `quiz_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
