import { Router, ActivatedRoute, Params } from '@angular/router';
import {OnInit, Component} from '@angular/core';
import { RatingService } from '../service/rating.service';
import { Rating } from "../model/rating";

@Component({
  selector: 'app-rating-page',
  templateUrl: './rating-page.component.html',
  styleUrls: ['./rating-page.component.scss']
})
export class RatingPageComponent implements OnInit {
statusCode: number;
rating: Rating;
id: String;
requestProcessing = false;
allRating: Rating[];



   constructor(private ratingService: RatingService,private route: Router, private activatedRoute: ActivatedRoute ) {}
  
    ngOnInit() {
       this.readIdFromUrl()
    }    
   

    readIdFromUrl(){
      this.activatedRoute.params.subscribe(
        (params: Params) => {this.id = params['id']; this.getRating(this.id)},
        (err)=>console.log(err))
        
    }


    updateRating(event){
      let rat = event.target.id;
      let tmpValue = this.rating[rat];
      tmpValue = (parseInt(tmpValue )+ 1)
      this.rating[rat] = tmpValue
      this.onAddOrUpdateRate(this.rating);
    }


    onAddOrUpdateRate(rating:Rating){
     this.preProcessConfigurations();
    //  let rating = new Rating(null,"firstUPDATED",null,null,null,null,null,null)
     this.ratingService.putRating(rating).subscribe(
        (successCode) => { this.statusCode = successCode; console.log(successCode)},
        (errorCode) => this.statusCode = errorCode);	  
    }


    
      
    getRating(id){
      this.preProcessConfigurations();
      this.ratingService.getRatingById(id).subscribe(
        (rating) => { this.requestProcessing = false;  this.rating = rating;
        console.log(this.rating)
        },
        (errorCode) =>  this.statusCode = errorCode);          
    }


    preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
    }


}
