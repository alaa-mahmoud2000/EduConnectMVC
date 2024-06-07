export interface ICollege {
    id: number,
    name: string,
    address: string, 
    fees: number,
    contactNumber: string,
    university: string
}

export interface IStudent{
    _id : number,
    _name : string, 
    _phoneNumber: string,
    _password: string,
    _email : string,
    _address: string, 
    _eduType: string,
    _score: number,
    _dob: string,
    _school: string,
    _budget: number
}

export class Student implements IStudent {
    private id: number;
    private name: string;
    private phoneNumber: string;
    private password: string;
    private email: string;
    private address: string;
    private eduType: string;
    private score: number;
    private dob: string;
    private school: string;
    private budget: number;
  
    constructor(data: Partial<IStudent> = {}) {
      this.id = data._id || 0;
      this.name = data._name || '';
      this.phoneNumber = data._phoneNumber || '';
      this.password = data._password || '';
      this.email = data._email || '';
      this.address = data._address || '';
      this.eduType = data._eduType || '';
      this.score = data._score || 0;
      this.dob = data._dob || '';
      this.school = data._school || '';
      this.budget = data._budget || 0;
    }

  
    set _id(value: number) {
        this.id = value;
    }
    get _id(): number { return this.id;}

    set _budget(value: number) {
        this.budget = value;
    }
    get _budget(): number { return this.budget;}
      
    get _name(): string { return this.name; }
    set _name(value: string) { this.name = value; }
  
    get _phoneNumber(): string { return this.phoneNumber; }
    set _phoneNumber(value: string) { this.phoneNumber = value; }
  
    get _password(): string { return this.password; }
    set _password(value: string) { this.password = value; }
  
    get _email(): string { return this.email; }
    set _email(value: string) { this.email = value; }
  
    get _address(): string { return this.address; }
    set _address(value: string) { this.address = value; }
  
    get _eduType(): string { return this.eduType; }
    set _eduType(value: string) { this.eduType = value; }
  
    get _score(): number { return this.score; }
    set _score(value: number) { this.score = value; }
  
    get _dob(): string { return this.dob; }
    set _dob(value: string) { this.dob = value; }
  
    get _school(): string { return this.school; }
    set _school(value: string) { this.school = value; }
  }

export interface IDepartment{
    name : number, 
    description: string, 
    collegeId: number,
    collegeName: string
}

export interface ILoginModel{
    username : string,
    password: string
}
export interface IStudentInfo {
    Name : string,
    PhoneNumber : string,
    School : string,
    Score : number,
    Address : string,
    EduType : string
}