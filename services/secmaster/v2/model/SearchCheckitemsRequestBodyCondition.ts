import { BaselineSearchRequestBodyConditionConditions } from './BaselineSearchRequestBodyConditionConditions';


export class SearchCheckitemsRequestBodyCondition {
    public conditions?: Array<BaselineSearchRequestBodyConditionConditions>;
    public logics?: Array<string>;
    public constructor() { 
    }
    public withConditions(conditions: Array<BaselineSearchRequestBodyConditionConditions>): SearchCheckitemsRequestBodyCondition {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<string>): SearchCheckitemsRequestBodyCondition {
        this['logics'] = logics;
        return this;
    }
}