import { DataobjectSearchConditionConditions } from './DataobjectSearchConditionConditions';
import { DataobjectSearchConditionLogics } from './DataobjectSearchConditionLogics';


export class DataobjectSearchCondition {
    public conditions?: Array<DataobjectSearchConditionConditions>;
    public logics?: Array<DataobjectSearchConditionLogics>;
    public constructor() { 
    }
    public withConditions(conditions: Array<DataobjectSearchConditionConditions>): DataobjectSearchCondition {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<DataobjectSearchConditionLogics>): DataobjectSearchCondition {
        this['logics'] = logics;
        return this;
    }
}