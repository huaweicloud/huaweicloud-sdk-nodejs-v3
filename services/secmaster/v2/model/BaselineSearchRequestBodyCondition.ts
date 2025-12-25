import { BaselineSearchRequestBodyConditionConditions } from './BaselineSearchRequestBodyConditionConditions';


export class BaselineSearchRequestBodyCondition {
    public conditions?: Array<BaselineSearchRequestBodyConditionConditions>;
    public logics?: Array<string>;
    public constructor() { 
    }
    public withConditions(conditions: Array<BaselineSearchRequestBodyConditionConditions>): BaselineSearchRequestBodyCondition {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<string>): BaselineSearchRequestBodyCondition {
        this['logics'] = logics;
        return this;
    }
}