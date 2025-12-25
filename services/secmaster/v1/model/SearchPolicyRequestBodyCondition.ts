import { SearchPolicyRequestBodyConditionConditions } from './SearchPolicyRequestBodyConditionConditions';


export class SearchPolicyRequestBodyCondition {
    public conditions?: Array<SearchPolicyRequestBodyConditionConditions>;
    public logics?: Array<string>;
    public constructor() { 
    }
    public withConditions(conditions: Array<SearchPolicyRequestBodyConditionConditions>): SearchPolicyRequestBodyCondition {
        this['conditions'] = conditions;
        return this;
    }
    public withLogics(logics: Array<string>): SearchPolicyRequestBodyCondition {
        this['logics'] = logics;
        return this;
    }
}