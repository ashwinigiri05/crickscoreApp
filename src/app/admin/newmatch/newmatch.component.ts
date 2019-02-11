import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newmatch',
  templateUrl: './newmatch.component.html',
  styleUrls: ['./newmatch.component.css']
})
export class NewmatchComponent implements OnInit {
  team1Name :string;
  team2Name :string;
  toss:string;
  decision:number;
  overs:number;
  
  
  constructor( 
    private matchService: MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) { }
    
    ngOnInit() { }
    
    onClearClick(){
      this.team1Name=null;
      this.team2Name=null;
      this.toss=null;
      this.decision=null;
      this.overs=null;
    }
    onDefineClick(overElement: HTMLInputElement){
      //const overs = +overElement.value;
      
      if(this.overs < 2 || this.overs > 10){
        alert("overs must be in between 2 to 10");
        return;
      }
      
      this.matchService.getMatch().setTeamName(this.team1Name,this.team2Name);
      this.matchService.getMatch().setTossWinningTeam(this.toss,this.decision);
      console.log(this.toss);
      console.log(this.decision);
      this.matchService.getMatch().setOversForMatch(this.overs);
      
      this.router.navigate(['/admin','team']);
      
    }
    
  }
  