

export class ImageRiskConfigsInfoResponseInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'check_rule_num'?: number;
    private 'failed_rule_num'?: number;
    private 'check_type_desc'?: string;
    public constructor() { 
    }
    public withSeverity(severity: string): ImageRiskConfigsInfoResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): ImageRiskConfigsInfoResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ImageRiskConfigsInfoResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ImageRiskConfigsInfoResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckRuleNum(checkRuleNum: number): ImageRiskConfigsInfoResponseInfo {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withFailedRuleNum(failedRuleNum: number): ImageRiskConfigsInfoResponseInfo {
        this['failed_rule_num'] = failedRuleNum;
        return this;
    }
    public set failedRuleNum(failedRuleNum: number  | undefined) {
        this['failed_rule_num'] = failedRuleNum;
    }
    public get failedRuleNum(): number | undefined {
        return this['failed_rule_num'];
    }
    public withCheckTypeDesc(checkTypeDesc: string): ImageRiskConfigsInfoResponseInfo {
        this['check_type_desc'] = checkTypeDesc;
        return this;
    }
    public set checkTypeDesc(checkTypeDesc: string  | undefined) {
        this['check_type_desc'] = checkTypeDesc;
    }
    public get checkTypeDesc(): string | undefined {
        return this['check_type_desc'];
    }
}