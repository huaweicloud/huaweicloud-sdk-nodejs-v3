import { CheckRuleKeyInfoRequestInfo } from './CheckRuleKeyInfoRequestInfo';


export class CheckRuleIdListRequestInfo {
    private 'check_rules'?: Array<CheckRuleKeyInfoRequestInfo>;
    public constructor() { 
    }
    public withCheckRules(checkRules: Array<CheckRuleKeyInfoRequestInfo>): CheckRuleIdListRequestInfo {
        this['check_rules'] = checkRules;
        return this;
    }
    public set checkRules(checkRules: Array<CheckRuleKeyInfoRequestInfo>  | undefined) {
        this['check_rules'] = checkRules;
    }
    public get checkRules(): Array<CheckRuleKeyInfoRequestInfo> | undefined {
        return this['check_rules'];
    }
}