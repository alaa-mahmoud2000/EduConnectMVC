Create Database EduConnectDB

;
Use EduConnectDB
;

CREATE TABLE College (
    Id BIGINT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(300) NOT NULL,
    Fees DOUBLE NOT NULL,
    Address LONGTEXT,
    `Rank` INTEGER NOT NULL,
    ContactNumber VARCHAR(13) NOT NULL,
    University VARCHAR(300) NOT NULL,
    AreaOfStudy VARCHAR(300),
    City VARCHAR(300),
    Score DOUBLE
);

 

Create Table Student(
	Id bigint primary key AUTO_INCREMENT,
	Name VARCHAR(500) not null,
	PhoneNumber VARCHAR(13) not null,
	Email varchar(300) not null,
	Address longtext not null,
	Password VARCHAR(500) not null,
	EduType VARCHAR(15) not null,
	Score float not null, 
	DOB Datetime not null,
	School VARCHAR(500) not null,
	Budget float  not null
);


Create Table Recommendation (
	Id bigint primary key AUTO_INCREMENT, 
	CollegeId bigint ,
	StudentId bigint ,
    foreign key (CollegeId) references College(Id),
    foreign Key (StudentId) references Student(Id)
);


; 
Create Table Department(
	Id int primary key AUTO_INCREMENT,
	Name VARCHAR(200) not null, 
	Description longtext,
	CollegeId bigint ,
    foreign key (CollegeId) references College(Id) 
);

; 
Create Table Reviews (
	Id bigint primary key AUTO_INCREMENT,
	Comment longtext,
	`Date` Datetime,
	Rate float not null
);

;


INSERT INTO College (Id, Name, Fees, Address, `Rank`, ContactNumber, University, AreaOfStudy, City, Score) VALUES 
(1, 'Science and Information Technology', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Alexandria University', 'Computer Science', 'Alexandria', 85.5),
(2, 'Medicine', 4000.5, '83 Mohamed Shawki Street', 839, '0102378478754', 'Alexandria University', 'Medical Sciences', 'Alexandria', 92.3),
(3, 'Pharmacy', 7382, '83 Mohamed Shawki Street', 342, '0102378478754', 'Alexandria University', 'Pharmaceutical Sciences', 'Alexandria', 88.4),
(4, 'Science and Information Technology', 73822, '83 Mohamed Shawki Street', 342, '0102378478754', 'Cairo University', 'Computer Science', 'Cairo', 79.6),
(5, 'Medicine', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Cairo University', 'Medical Sciences', 'Cairo', 95.7),
(6, 'Science and Information Technology', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Ain Shams University', 'Computer Science', 'Cairo', 84.9),
(7, 'Engineering', 4000.5, '83 Mohamed Shawki Street', 839, '0102378478754', 'Alexandria University', 'Engineering', 'Alexandria', 90.2),
(8, 'Nursing', 7382, '83 Mohamed Shawki Street', 342, '0102378478754', 'Alexandria University', 'Nursing', 'Alexandria', 76.4),
(9, 'Artificial Intelligence', 73822, '83 Mohamed Shawki Street', 342, '0102378478754', 'Cairo University', 'Artificial Intelligence', 'Cairo', 89.5),
(10, 'Medicine', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Cairo University', 'Medical Sciences', 'Cairo', 93.6),
(11, 'Medicine', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Assiut University', 'Medical Sciences', 'Assiut', 78.9),
(12, 'Literature', 2332.5, '83 Mohamed Shawki Street', 342, '0102378478754', 'Cairo University', 'Humanities', 'Cairo', 72.5);

Insert into student values (1, 'Alaa Mahmoud' , '010983643' , 'alaa@gmail' , '72 Mostafa Kamel' , 'Test' , 'Thanawya Amma' , 99.99, '2000-9-6' , 'Raml' , 3234),
(2, 'Bouthaina' , '010983643d' , 'bosy@gmail' , '72 Mostafa Kamel' , 'Test' , 'IG' , 99.99, '2003-9-6' , 'Raml' , 3234)

  

