    export class Commentry {
        private batsmanOnStrike : string;
        private bastsmanOnNonstrike:string;
        private bowlerName:string;
        private balls:number;
        private runsPerBall:number;
        private wicketType:string;
        private catchBy: string;
        private numberOfOvers: number;
        private commentry: string;
        
        constructor(
            batsmanOnStrike:string,
            bastsmanOnNonstrike:string,
            bowlerName:string,
            balls:number,
            runsPerBall:number,
            wicketType:string,
            catchBy: string,
            numberOfOvers: number,
            commentry: string
            ) {
                
                this.batsmanOnStrike = batsmanOnStrike;
                this.bastsmanOnNonstrike = bastsmanOnNonstrike;
                this.bowlerName = bowlerName;
                this.balls = balls;
                this.runsPerBall = runsPerBall;
                this.wicketType = wicketType;
                this.catchBy = catchBy;
                this.numberOfOvers = numberOfOvers;
                this.commentry = commentry;
            }
            
            setbatsmanOnStrike(batsmanOnStrike:string) {
                this.batsmanOnStrike = batsmanOnStrike;
            }
            
            setbastsmanOnNonstrike(bastsmanOnNonstrike:string) {
                this.bastsmanOnNonstrike = bastsmanOnNonstrike;
            }
            
            setBowlerName(bowlerName:string) {
                this.bowlerName = bowlerName;
            }
            
            setBalls(balls:number) {
                this.balls = balls;
            }
            
            setRunsPerBall(runsPerBall:number) {
                this.runsPerBall = runsPerBall;
            }
            
            setWicketType(wicketType:string) {
                this.wicketType = wicketType;
            }
            
            setCatchBy (catchBy:string) {
                this.catchBy = catchBy;
            }
            
            setNumberOfOvers(numberOfOvers:number) {
                this.numberOfOvers = numberOfOvers;
            }
            
            setCommentry(commentry:string) {
                this.commentry = commentry;
            }
            
            getbatsmanOnStrike() {
                return this.batsmanOnStrike;
            }
            
            getbastsmanOnNonstrike() {
                return this.bastsmanOnNonstrike;
            }
            
            getBowlerName() {
                return this.bowlerName;
            }
            
            getBalls() {
                return this.balls;
            }
            
            getrunsPerBall() {
                return  (this.wicketType ? this.getWicketType() : this.runsPerBall);
            }
            
            getWicketType() {
                return this.wicketType;
            }
            
            getCatchBy() {
                return this.catchBy;
            }
            
            getNumberOfOvers() {
                return this.numberOfOvers;
            }
            
            getCommentry() {
                return this.commentry;
            }
            
        }