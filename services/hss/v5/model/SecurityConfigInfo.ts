

export class SecurityConfigInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_rule_num'?: number;
    private 'failed_rule_num'?: number;
    private 'scan_time'?: number;
    private 'check_type_desc'?: string;
    public constructor() { 
    }
    public withSeverity(severity: string): SecurityConfigInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): SecurityConfigInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckRuleNum(checkRuleNum: number): SecurityConfigInfo {
        this['check_rule_num'] = checkRuleNum;
        return this;
    }
    public set checkRuleNum(checkRuleNum: number  | undefined) {
        this['check_rule_num'] = checkRuleNum;
    }
    public get checkRuleNum(): number | undefined {
        return this['check_rule_num'];
    }
    public withFailedRuleNum(failedRuleNum: number): SecurityConfigInfo {
        this['failed_rule_num'] = failedRuleNum;
        return this;
    }
    public set failedRuleNum(failedRuleNum: number  | undefined) {
        this['failed_rule_num'] = failedRuleNum;
    }
    public get failedRuleNum(): number | undefined {
        return this['failed_rule_num'];
    }
    public withScanTime(scanTime: number): SecurityConfigInfo {
        this['scan_time'] = scanTime;
        return this;
    }
    public set scanTime(scanTime: number  | undefined) {
        this['scan_time'] = scanTime;
    }
    public get scanTime(): number | undefined {
        return this['scan_time'];
    }
    public withCheckTypeDesc(checkTypeDesc: string): SecurityConfigInfo {
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