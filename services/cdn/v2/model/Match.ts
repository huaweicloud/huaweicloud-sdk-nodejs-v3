import { CriteriaItem } from './CriteriaItem';


export class Match {
    public logic?: string;
    public criteria?: Array<CriteriaItem>;
    public constructor(logic?: string, criteria?: Array<CriteriaItem>) { 
        this['logic'] = logic;
        this['criteria'] = criteria;
    }
    public withLogic(logic: string): Match {
        this['logic'] = logic;
        return this;
    }
    public withCriteria(criteria: Array<CriteriaItem>): Match {
        this['criteria'] = criteria;
        return this;
    }
}