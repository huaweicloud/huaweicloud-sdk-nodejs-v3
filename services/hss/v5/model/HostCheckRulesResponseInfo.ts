import { CheckRuleFixParamInfo } from './CheckRuleFixParamInfo';


export class HostCheckRulesResponseInfo {
    private 'check_rule_id'?: string;
    private 'check_rule_name'?: string;
    public tag?: string;
    public severity?: string;
    private 'result_type'?: string;
    private 'rule_params'?: Array<CheckRuleFixParamInfo>;
    private 'scan_time'?: number;
    private 'host_type'?: string;
    private 'diff_description'?: string;
    public description?: string;
    private 'enable_fix'?: number;
    private 'enable_click'?: boolean;
    private 'enable_verify'?: boolean;
    private 'cancel_ignore_enable_click'?: boolean;
    private 'fix_failed_reason'?: string;
    public constructor() { 
    }
    public withCheckRuleId(checkRuleId: string): HostCheckRulesResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withCheckRuleName(checkRuleName: string): HostCheckRulesResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withTag(tag: string): HostCheckRulesResponseInfo {
        this['tag'] = tag;
        return this;
    }
    public withSeverity(severity: string): HostCheckRulesResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withResultType(resultType: string): HostCheckRulesResponseInfo {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withRuleParams(ruleParams: Array<CheckRuleFixParamInfo>): HostCheckRulesResponseInfo {
        this['rule_params'] = ruleParams;
        return this;
    }
    public set ruleParams(ruleParams: Array<CheckRuleFixParamInfo>  | undefined) {
        this['rule_params'] = ruleParams;
    }
    public get ruleParams(): Array<CheckRuleFixParamInfo> | undefined {
        return this['rule_params'];
    }
    public withScanTime(scanTime: number): HostCheckRulesResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withHostType(hostType: string): HostCheckRulesResponseInfo {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withDiffDescription(diffDescription: string): HostCheckRulesResponseInfo {
        this['diff_description'] = diffDescription;
        return this;
    }
    public set diffDescription(diffDescription: string  | undefined) {
        this['diff_description'] = diffDescription;
    }
    public get diffDescription(): string | undefined {
        return this['diff_description'];
    }
    public withDescription(description: string): HostCheckRulesResponseInfo {
        this['description'] = description;
        return this;
    }
    public withEnableFix(enableFix: number): HostCheckRulesResponseInfo {
        this['enable_fix'] = enableFix;
        return this;
    }
    public set enableFix(enableFix: number  | undefined) {
        this['enable_fix'] = enableFix;
    }
    public get enableFix(): number | undefined {
        return this['enable_fix'];
    }
    public withEnableClick(enableClick: boolean): HostCheckRulesResponseInfo {
        this['enable_click'] = enableClick;
        return this;
    }
    public set enableClick(enableClick: boolean  | undefined) {
        this['enable_click'] = enableClick;
    }
    public get enableClick(): boolean | undefined {
        return this['enable_click'];
    }
    public withEnableVerify(enableVerify: boolean): HostCheckRulesResponseInfo {
        this['enable_verify'] = enableVerify;
        return this;
    }
    public set enableVerify(enableVerify: boolean  | undefined) {
        this['enable_verify'] = enableVerify;
    }
    public get enableVerify(): boolean | undefined {
        return this['enable_verify'];
    }
    public withCancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean): HostCheckRulesResponseInfo {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
        return this;
    }
    public set cancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean  | undefined) {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
    }
    public get cancelIgnoreEnableClick(): boolean | undefined {
        return this['cancel_ignore_enable_click'];
    }
    public withFixFailedReason(fixFailedReason: string): HostCheckRulesResponseInfo {
        this['fix_failed_reason'] = fixFailedReason;
        return this;
    }
    public set fixFailedReason(fixFailedReason: string  | undefined) {
        this['fix_failed_reason'] = fixFailedReason;
    }
    public get fixFailedReason(): string | undefined {
        return this['fix_failed_reason'];
    }
}