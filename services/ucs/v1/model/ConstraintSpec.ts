import { Match } from './Match';


export class ConstraintSpec {
    public enforcementAction?: string;
    public match?: Match;
    public parameters?: object;
    public constructor() { 
    }
    public withEnforcementAction(enforcementAction: string): ConstraintSpec {
        this['enforcementAction'] = enforcementAction;
        return this;
    }
    public withMatch(match: Match): ConstraintSpec {
        this['match'] = match;
        return this;
    }
    public withParameters(parameters: object): ConstraintSpec {
        this['parameters'] = parameters;
        return this;
    }
}