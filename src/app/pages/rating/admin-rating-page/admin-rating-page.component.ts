import { Router, ActivatedRoute, Params } from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { RatingService } from '../service/rating.service';
import { Rating } from "../model/rating";

@Component({
  selector: 'app-admin-rating-page',
  templateUrl: './admin-rating-page.component.html',
  styleUrls: ['./admin-rating-page.component.scss']
})
export class AdminRatingPageComponent implements OnInit {
statusCode: number;
rating: Rating;
id: String;
requestProcessing = false;
allRating: Rating[];

   constructor(private ratingService: RatingService,private route: Router, private activatedRoute: ActivatedRoute ) {}
  
    ngOnInit() {

    }    
   

    readIdFromUrl(){
      this.activatedRoute.params.subscribe(
        (params: Params) => {this.id = params['id']; this.getRating(this.id)},
        (err)=>console.log(err))
        
    }

    onAddOrUpdateRate(){
     this.preProcessConfigurations();
    //  new Date(timeStampInMs).toISOString() 
     let rating = new Rating(null,"firstUPDATED",null,null,null,null,null,null)
     this.ratingService.putRating(rating).subscribe(
        (successCode) => { this.statusCode = successCode; console.log(successCode)},
        (errorCode) => this.statusCode = errorCode);	  
    }

    getAllRating(){
       this.preProcessConfigurations();
       this.ratingService.getAllRatings().subscribe(
        (data) => this.allRating = data,
        (errorCode) =>  this.statusCode = errorCode);  
    }
      
    getRating(id){
      this.preProcessConfigurations();
      this.ratingService.getRatingById(id).subscribe(
        (rating) => { this.requestProcessing = false;  this.rating = rating;
        console.log(this.rating)
        },
        (errorCode) =>  this.statusCode = errorCode);          
    }

    deletRaing(id){
      this.preProcessConfigurations();
      this.ratingService.deleteRatingById(id).subscribe(
        (successCode) => { this.statusCode = successCode; this.getAllRating() },
        (errorCode) =>  this.statusCode = errorCode );    
    }

    preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
    }


}
