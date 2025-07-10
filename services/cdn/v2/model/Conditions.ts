import { Match } from './Match';


export class Conditions {
    public match?: Match;
    public constructor(match?: Match) { 
        this['match'] = match;
    }
    public withMatch(match: Match): Conditions {
        this['match'] = match;
        return this;
    }
}