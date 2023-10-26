

export class ImageRiskConfigsCheckRulesResponseInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'check_rule_name'?: string;
    private 'check_rule_id'?: string;
    private 'scan_result'?: string;
    public constructor() { 
    }
    public withSeverity(severity: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withCheckRuleId(checkRuleId: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withScanResult(scanResult: string): ImageRiskConfigsCheckRulesResponseInfo {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
}