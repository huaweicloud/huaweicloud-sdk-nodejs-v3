import { CheckRuleFixValuesInfo } from './CheckRuleFixValuesInfo';


export class CheckRuleKeyInfoRequestInfo {
    private 'check_name'?: string;
    private 'check_rule_id'?: string;
    public standard?: string;
    private 'fix_values'?: Array<CheckRuleFixValuesInfo>;
    public constructor() { 
    }
    public withCheckName(checkName: string): CheckRuleKeyInfoRequestInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckRuleId(checkRuleId: string): CheckRuleKeyInfoRequestInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withStandard(standard: string): CheckRuleKeyInfoRequestInfo {
        this['standard'] = standard;
        return this;
    }
    public withFixValues(fixValues: Array<CheckRuleFixValuesInfo>): CheckRuleKeyInfoRequestInfo {
        this['fix_values'] = fixValues;
        return this;
    }
    public set fixValues(fixValues: Array<CheckRuleFixValuesInfo>  | undefined) {
        this['fix_values'] = fixValues;
    }
    public get fixValues(): Array<CheckRuleFixValuesInfo> | undefined {
        return this['fix_values'];
    }
}