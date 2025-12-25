import { DataobjectSearchConditionConditions } from './DataobjectSearchConditionConditions';


export class DataobjectSearchCondition {
    public conditions?: Array<DataobjectSearchConditionConditions>;
    public logics?: Array<string>;
    public constructor() { 
    }
    public withConditions(conditions: Array<DataobjectSearchConditionConditions>): DataobjectSearchCondition {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<string>): DataobjectSearchCondition {
        this['logics'] = logics;
        return this;
    }
}