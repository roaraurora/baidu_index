import { Component, OnInit, Input } from '@angular/core';
import { Observable,of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  resultSet$: Observable<any>;
  public url: string
  public content: string
  public err: string='';

  @Input() code: string;

  constructor(private http: HttpClient,private router:Router) { }

  ngOnInit() {
    this.resultSet$ = this.http.get<any[]>("https://worldcup.sfg.io/matches/country?fifa_code=" + this.code)
      .pipe(map(response => response), catchError(this.handleError<any[]>('search', [])))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.router.navigateByUrl("index") 
      console.error(error);
      return of(result as T);
    };
  }

}
