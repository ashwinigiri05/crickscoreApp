import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inning',
  templateUrl: './inning.component.html',
  styleUrls: ['./inning.component.css']
})
export class InningComponent implements OnInit {
  
  batsmanOnStrike:string;
  bastsmanOnNonstrike:string;
  bowlerName:string;
  balls:number;
  currentBall=0;
  currentOver=0;
  runsPerBall:number;
  wicketType:string;
  catchBy: string;
  numberOfOvers: number;
  commentry: string;
  inningStart:any;
  inningEnd:any;
  
  @ViewChild('ball') ballInTS: ElementRef;
  @ViewChild('over') overInTS: ElementRef;
  
  public showWicket:boolean = false;
  public showCatchBy:boolean = false;
  public buttonName:any = 'ShowType';
  public buttonName1:any = 'Show';
  
  @ViewChild('possibleRuns')possibleRunsinf:ElementRef;
  @ViewChild('Wicket') wicketTypeinf:ElementRef;
  
  constructor( 
    public matchService: MatchService,
    private router:Router,
    private route:ActivatedRoute
    ) { 
      console.log(this.matchService.getMatch().getTeam1());
      console.log(this.matchService.getMatch().getTeam2());
    }
    
    ngOnInit() { 
      this.inningStart = this.matchService.getMatch().getTeam1();
      this.inningEnd = this.matchService.getMatch().getTeam2()
    }
    
    onAddScoreClick(currentOverElement: HTMLInputElement){
      
      this.currentBall++;
      if (this.currentBall > 6) {
        this.currentOver ++ ;
        this.currentBall = 1;
        
        if(this.currentOver < this.matchService.getMatch().getNumberOfOvers()){
        }
        else{
          this.matchService.getMatch().setInningFinshedMessage("1st Inning Finished !!");
          console.log("1st finsished");
          this.currentBall = 1;
          this.currentOver = 0;
          
        }
      }
      this.matchService.getMatch().saveCommentryDetails
      (
        this.batsmanOnStrike,
        this.bastsmanOnNonstrike,
        this.bowlerName,
        this.currentBall,
        this.runsPerBall,
        this.wicketType,
        this.catchBy,
        this.currentOver,
        this.commentry
        
        );
        console.log(this.commentry);
        console.log(this.currentBall);
        console.log(this.currentOver);
      }
      
      onSelectOfPossibility(event)
      {
        const element:HTMLInputElement = event.target ;
        console.log(element.value);
        if(element.value == 'Wicket'){
          this.showWicket = true;
        }
        else{
          this.showWicket=false;
        }
        
      }
      
      onSelectOfWicket(event)
      {
        const element:HTMLInputElement = event.target ;
        console.log(element.value);
        if(element.value=='Catch' || element.value=='Stumping') {
          this.showCatchBy = true;
        }
        else{
          this.showCatchBy = false;
        }
        
      }
    }
    