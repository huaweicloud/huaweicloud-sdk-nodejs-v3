import { CheckRuleFixParamInfo } from './CheckRuleFixParamInfo';


export class CheckRuleRiskInfoResponseInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'check_rule_name'?: string;
    private 'check_rule_id'?: string;
    private 'host_num'?: number;
    private 'scan_result'?: string;
    public status?: string;
    private 'enable_fix'?: number;
    private 'enable_click'?: boolean;
    private 'rule_params'?: Array<CheckRuleFixParamInfo>;
    public constructor() { 
    }
    public withSeverity(severity: string): CheckRuleRiskInfoResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): CheckRuleRiskInfoResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): CheckRuleRiskInfoResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): CheckRuleRiskInfoResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): CheckRuleRiskInfoResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withCheckRuleId(checkRuleId: string): CheckRuleRiskInfoResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withHostNum(hostNum: number): CheckRuleRiskInfoResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withScanResult(scanResult: string): CheckRuleRiskInfoResponseInfo {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
    public withStatus(status: string): CheckRuleRiskInfoResponseInfo {
        this['status'] = status;
        return this;
    }
    public withEnableFix(enableFix: number): CheckRuleRiskInfoResponseInfo {
        this['enable_fix'] = enableFix;
        return this;
    }
    public set enableFix(enableFix: number  | undefined) {
        this['enable_fix'] = enableFix;
    }
    public get enableFix(): number | undefined {
        return this['enable_fix'];
    }
    public withEnableClick(enableClick: boolean): CheckRuleRiskInfoResponseInfo {
        this['enable_click'] = enableClick;
        return this;
    }
    public set enableClick(enableClick: boolean  | undefined) {
        this['enable_click'] = enableClick;
    }
    public get enableClick(): boolean | undefined {
        return this['enable_click'];
    }
    public withRuleParams(ruleParams: Array<CheckRuleFixParamInfo>): CheckRuleRiskInfoResponseInfo {
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