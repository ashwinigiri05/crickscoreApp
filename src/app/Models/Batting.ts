export class Batting{
    
    private didNotBat:boolean;
    private runsPerBall:number;
    private balls:number;
    private out:string;
    private batsmanOnStrike:boolean;
    private bastsmanOnNonstrike:boolean;
    
    constructor() {
        this.didNotBat = true;
    }
    
    startBatting() {
        this.didNotBat = false;
        this.balls = 0;
        this.runsPerBall = 0;
        this.out = 'Not Out';
    }
    
    playedNoRun() {
        this.runsPerBall;
        this.balls++;
    }
    
    
    playedSingleRun() {
        this.runsPerBall++;
        this.balls++;
    }
    
    playedDoubleRun() {
        this.runsPerBall+=2;
        this.balls++;
    }
    
    playedThreeRun() {
        this.runsPerBall+=3;
        this.balls++;
    }
    
    playedFourRun() {
        this.runsPerBall+=4;
        this.balls++;
    }
    
    playedSixRun() {
        this.runsPerBall+=6;
        this.balls++;
    }
    
    playerOutOnBall() {
        this.balls++;
    }
}