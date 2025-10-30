import { CheckRuleFixParamInfo } from './CheckRuleFixParamInfo';


export class SecurityCheckPolicyDetailInfoResponseInfo {
    public key?: string;
    private 'check_rule_id'?: string;
    private 'check_rule_name'?: string;
    private 'check_rule_type'?: number;
    private 'check_type'?: string;
    public severity?: string;
    public level?: string;
    public checked?: boolean;
    private 'rule_params'?: Array<CheckRuleFixParamInfo>;
    public constructor() { 
    }
    public withKey(key: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['key'] = key;
        return this;
    }
    public withCheckRuleId(checkRuleId: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withCheckRuleName(checkRuleName: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withCheckRuleType(checkRuleType: number): SecurityCheckPolicyDetailInfoResponseInfo {
        this['check_rule_type'] = checkRuleType;
        return this;
    }
    public set checkRuleType(checkRuleType: number  | undefined) {
        this['check_rule_type'] = checkRuleType;
    }
    public get checkRuleType(): number | undefined {
        return this['check_rule_type'];
    }
    public withCheckType(checkType: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withSeverity(severity: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withLevel(level: string): SecurityCheckPolicyDetailInfoResponseInfo {
        this['level'] = level;
        return this;
    }
    public withChecked(checked: boolean): SecurityCheckPolicyDetailInfoResponseInfo {
        this['checked'] = checked;
        return this;
    }
    public withRuleParams(ruleParams: Array<CheckRuleFixParamInfo>): SecurityCheckPolicyDetailInfoResponseInfo {
        this['rule_params'] = ruleParams;
        return this;
    }
    public set ruleParams(ruleParams: Array<CheckRuleFixParamInfo>  | undefined) {
        this['rule_params'] = ruleParams;
    }
    public get ruleParams(): Array<CheckRuleFixParamInfo> | undefined {
        return this['rule_params'];
    }
}