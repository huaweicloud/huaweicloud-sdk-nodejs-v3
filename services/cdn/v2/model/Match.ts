import { Criteria } from './Criteria';


export class Match {
    public logic?: string;
    public criteria?: Array<Criteria>;
    public constructor(logic?: string, criteria?: Array<Criteria>) { 
        this['logic'] = logic;
        this['criteria'] = criteria;
    }
    public withLogic(logic: string): Match {
        this['logic'] = logic;
        return this;
    }
    public withCriteria(criteria: Array<Criteria>): Match {
        this['criteria'] = criteria;
        return this;
    }
}