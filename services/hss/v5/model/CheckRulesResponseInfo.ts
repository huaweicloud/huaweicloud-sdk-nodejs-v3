import { CheckRuleFixParamInfo } from './CheckRuleFixParamInfo';


export class CheckRulesResponseInfo {
    public tag?: string;
    private 'check_rule_name'?: string;
    private 'check_rule_id'?: string;
    public severity?: string;
    private 'check_type'?: string;
    private 'check_type_name'?: string;
    public standard?: string;
    private 'host_num'?: number;
    private 'failed_num'?: number;
    private 'scan_time'?: number;
    private 'statistics_scan_result'?: string;
    private 'enable_fix'?: number;
    private 'enable_click'?: boolean;
    private 'cancel_ignore_enable_click'?: boolean;
    private 'rule_params'?: Array<CheckRuleFixParamInfo>;
    public constructor() { 
    }
    public withTag(tag: string): CheckRulesResponseInfo {
        this['tag'] = tag;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): CheckRulesResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withCheckRuleId(checkRuleId: string): CheckRulesResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withSeverity(severity: string): CheckRulesResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckType(checkType: string): CheckRulesResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckTypeName(checkTypeName: string): CheckRulesResponseInfo {
        this['check_type_name'] = checkTypeName;
        return this;
    }
    public set checkTypeName(checkTypeName: string  | undefined) {
        this['check_type_name'] = checkTypeName;
    }
    public get checkTypeName(): string | undefined {
        return this['check_type_name'];
    }
    public withStandard(standard: string): CheckRulesResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withHostNum(hostNum: number): CheckRulesResponseInfo {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withFailedNum(failedNum: number): CheckRulesResponseInfo {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withScanTime(scanTime: number): CheckRulesResponseInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withStatisticsScanResult(statisticsScanResult: string): CheckRulesResponseInfo {
        this['statistics_scan_result'] = statisticsScanResult;
        return this;
    }
    public set statisticsScanResult(statisticsScanResult: string  | undefined) {
        this['statistics_scan_result'] = statisticsScanResult;
    }
    public get statisticsScanResult(): string | undefined {
        return this['statistics_scan_result'];
    }
    public withEnableFix(enableFix: number): CheckRulesResponseInfo {
        this['enable_fix'] = enableFix;
        return this;
    }
    public set enableFix(enableFix: number  | undefined) {
        this['enable_fix'] = enableFix;
    }
    public get enableFix(): number | undefined {
        return this['enable_fix'];
    }
    public withEnableClick(enableClick: boolean): CheckRulesResponseInfo {
        this['enable_click'] = enableClick;
        return this;
    }
    public set enableClick(enableClick: boolean  | undefined) {
        this['enable_click'] = enableClick;
    }
    public get enableClick(): boolean | undefined {
        return this['enable_click'];
    }
    public withCancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean): CheckRulesResponseInfo {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
        return this;
    }
    public set cancelIgnoreEnableClick(cancelIgnoreEnableClick: boolean  | undefined) {
        this['cancel_ignore_enable_click'] = cancelIgnoreEnableClick;
    }
    public get cancelIgnoreEnableClick(): boolean | undefined {
        return this['cancel_ignore_enable_click'];
    }
    public withRuleParams(ruleParams: Array<CheckRuleFixParamInfo>): CheckRulesResponseInfo {
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