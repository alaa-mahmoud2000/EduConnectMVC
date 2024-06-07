import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICollege, ILoginModel, IStudent, IStudentInfo } from '../../shared/interfaces';
import { Observable , throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EduApiService {
  private baseUrl : string = "http://localhost:8800/api/";
  colleges : ICollege[] = [];
  
  constructor(private httpClient : HttpClient) { }

  ngOnInit(){

  }

  getColleges() : Observable<ICollege[]>{
    return this.httpClient.get<ICollege[]>(this.baseUrl + "college/getallbypage/1/5")
      .pipe(
        map(colleges => colleges),
        catchError(error => {
          console.error('Error getting colleges:', error);
          return throwError(() => error); 
        })
      );
  }

  registerStudent(student: IStudent): Observable<string> {
    student._address = "Adress";
    student._dob = "2005-1-1";
    student._eduType = "IG";
    student._phoneNumber = "3974893";
    student._score = 89;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post<string>(this.baseUrl + "auth/register", student, { headers })
      .pipe(
        map(registeredStudent => registeredStudent),
        catchError(error => {
          return throwError(() => error); 
        })
      );
  }

  login(model : ILoginModel): Observable<IStudentInfo>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.httpClient.post<IStudentInfo>(this.baseUrl + "auth/login", model, { headers })
      .pipe(
        map(registeredStudent => registeredStudent),
        catchError(error => {
          console.error('Error logging in :', error);
          return throwError(() => error); 
        })
      );    
  }
}
