Create Database EduConnectDB

;
Use EduConnectDB
;

Create Table College (
	Id bigint primary key AUTO_INCREMENT ,
	Name nvarchar(300) not null,
	Fees integer not null,
	Address longtext,
	`Rank` integer not null,
	ContactNumber nvarchar(13) not null,
	University  nvarchar(300) not null
);

 

Create Table Student(
	Id bigint primary key AUTO_INCREMENT,
	Name nvarchar(500) not null,
	PhoneNumber nvarchar(13) not null,
	Email nvarchar(300) not null,
	Address longtext not null,
	Password nvarchar(500) not null,
	EduType nvarchar(15) not null,
	Score float not null, 
	DOB Datetime not null,
	School nvarchar(500) not null,
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
	Name nvarchar(200) not null, 
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

Insert into college values (1,'Science and information Technology' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Alexandria Universiry')
,(2,'Medicine' , 4000.5 , '83 Mohamed Shawki Street' , 839, '0102378478754' , 'Alexandria Universiry')
, (3,'Pharmacy' , 7382 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Alexandria Universiry')
, (4,'Science and information Technology' , 73822 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Cairo Universiry')
,(5,'Medicine' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Cairo Universiry');


Insert into college values (6,'Science and information Technology' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Ain Shams Universiry')
,(7,'Engineering' , 4000.5 , '83 Mohamed Shawki Street' , 839, '0102378478754' , 'Alexandria Universiry')
, (8,'Nursing' , 7382 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Alexandria Universiry')
, (9,'Artificial Intelligence' , 73822 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Cairo Universiry')
,(10,'Medicine' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Cairo Universiry')
,(11,'Medicine' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Assuit Universiry')
,(12,'Literature' , 2332.5 , '83 Mohamed Shawki Street' , 342, '0102378478754' , 'Cairo Universiry');


Insert into student values (1, 'Alaa Mahmoud' , '010983643' , 'alaa@gmail' , '72 Mostafa Kamel' , 'Test' , 'Thanawya Amma' , 99.99, '2000-9-6' , 'Raml' , 3234),
(2, 'Bouthaina' , '010983643d' , 'bosy@gmail' , '72 Mostafa Kamel' , 'Test' , 'IG' , 99.99, '2003-9-6' , 'Raml' , 3234)

  

