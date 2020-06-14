import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { GameapiService } from '../gameapi.service';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {
  characters: any;
  rating: any;
  name: any;
  routTo: string;
  searchTerms = new Subject<string>();
  games: any;
  route: any;


  constructor( private gameService: GameapiService) {
    this.gameService.search(this.searchTerms).subscribe(data => {
        this.games = data;
      },
        err => console.log(err),
        () => console.log(this.games)
    );
  }

  
  getGame() {
    this.gameService.getGame().subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
  }



  getCharacters() {
    this.gameService.getCharacters().subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
  }

  getRating() {
    this.gameService.getRating().subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
  }
  getReviews(score) {
    this.gameService.getReviews(score).subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
}
  
  getRegion() {
    this.gameService.getRegion().subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
  
}
  getName() {
    this.gameService.getName().subscribe(data => {
      this.games = data;
      console.log(this.games);
      console.log(this.games.results[0].name)
  })
}
  
  
  ngOnInit(): void {
    
    // this.gameService.search(this.searchTerms).subscribe(data => {
    //   this.games = data;
    //   console.log(this.games);
    // });
    this.gameService.getGame().subscribe(data => {
      this.games = data;
      console.log(this.games);
    })
    
    
    this.getName();
    // get routes
    this.route.url.subscribe(params => {
      this.routTo = params[0].path;

      switch (this.routTo) {
        case 'characters':
          //get characters
          this.getCharacters();
          break;

        case 'platform':
          //get platform
          this.getPlatform();
          break;

          case 'rating':
          //get rating
          this.getRating();
          break;

          case 'region':
          //get region
          this.getRegion();
          break;

          // case 'reviews':
          //   //get reviews
          //   this.getReviews(score);
          //   break;

            case 'name':
              //get name
              this.getName();
              break;

        default:
          //route to home

          break;
      }
      
    });
  }
  getPlatform() {
    throw new Error("Method not implemented.");
  }
  }
  
