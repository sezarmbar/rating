import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';


import { Rating } from "../model/rating";
@Injectable()
export class RatingService {

	rating = "http://localhost:8080/api/rating";
	allrating = "http://localhost:8080/api/all-rating";

	constructor(private http:Http) { 
	}

	
// Rating ------------

	getAllRatings(): Observable<Rating[]> {
        return this.http.get(this.allrating)
		   		.map(this.extractData)
		        .catch(this.handleError);

    }
		
	getRatingById(id: string): Observable<Rating> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
		cpParams.set('id', id);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
		return this.http.get(this.rating, options)
			   .map(this.extractData)
			   .catch(this.handleError);
	}	

	putRating(rating: Rating):Observable<number> {
	    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.rating, rating, options)
               .map(success => success.status)
               .catch(this.handleError);
	}	
	deleteRatingById(id: string): Observable<number> {
		let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
		let cpParams = new URLSearchParams();
		cpParams.set('id', id);			
		let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
		return this.http.delete(this.rating, options)
			   .map(success => success.status)
			   .catch(this.handleError);
    }		

	// Utils -------------
	private extractData(res: Response) {
	    let body = res.json();
        return body;
	}
	
    private handleError (error: Response | any) {
		console.error(error.message || error);
		return Observable.throw(error.status);
	}

	
}