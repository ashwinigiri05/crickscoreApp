import { Team } from './Team';
import { Commentry } from './Commentary';

export class Match {
    
    readonly decision_batting=1;
    readonly decision_bowling=2;
    
    private team1Name:string;
    private team2Name:string;
    private team1:Team;
    private team2:Team;
    private tossWinBy:string;
    private decision:number;
    private numberOfOvers:number;
    private inningFinshedMessage:string;
    public commentryDetailsArray:Array<Commentry> = [];
    public runDetailsArray:Array<Commentry> = [];
    
    setTeamName(team1Name:string,team2Name:string) {
        this.team1Name = team1Name;
        this.team2Name = team2Name;
        this.team1 = new Team();
        this.team2 = new Team();
        
    }
    
    setTossWinningTeam(teamName:string, decision:number):boolean {
        this.tossWinBy = teamName;
        this.decision = decision;
        return true;
    }
    
    setOversForMatch(overs:number) {
        this.numberOfOvers = overs;
        console.log(this.numberOfOvers);
    }
    setInningFinshedMessage(inningFinshedMessage:string) {
        this.inningFinshedMessage = inningFinshedMessage;
    }
    getInningFinshedMessage() {
        return this.inningFinshedMessage;
    }
    inningChanged(){
        
    }
    getNumberOfOvers(){
        return this.numberOfOvers;
    }
    
    getTeam1Name() {
        return this.team1Name;
    }
    
    getTeam2Name() {
        return this.team2Name;
    }
    
    setTeam1(team1p:Team)
    {
        this.team1 = team1p;
    }
    
    getTeam1() {
        return this.team1;
    }
    
    getTeam2() {
        return this.team2;
    }
    
    saveCommentryDetails(
        onStrikeBatsmanName,
        nonStrikeBatsmanName,
        bowlerName,
        balls,
        runsPerBall,
        wicketType,
        catchBy,
        numberOfOvers,
        commentry   
        ) {
            this.commentryDetailsArray.push(
                new Commentry(
                    onStrikeBatsmanName,
                    nonStrikeBatsmanName,
                    bowlerName,
                    balls,
                    runsPerBall,
                    wicketType,
                    catchBy,
                    numberOfOvers,
                    commentry)
                    );
                    console.log(this.commentryDetailsArray);
                }
                
                getCommentry() {
                    return this.commentryDetailsArray;
                }
                
                saveRunDetails(
                    onStrikeBatsmanName,
                    nonStrikeBatsmanName,
                    bowlerName,
                    balls,
                    runsPerBall,
                    wicketType,
                    catchBy,
                    numberOfOvers,
                    commentry
                    ) {
                        this.runDetailsArray.push(
                            new Commentry
                            (
                                onStrikeBatsmanName,
                                nonStrikeBatsmanName,
                                bowlerName,
                                balls,
                                runsPerBall,
                                wicketType,
                                commentry ,
                                catchBy,
                                numberOfOvers,
                                
                                )
                                
                                );
                                console.log(this.runDetailsArray);
                            }
                            
                            
                        }