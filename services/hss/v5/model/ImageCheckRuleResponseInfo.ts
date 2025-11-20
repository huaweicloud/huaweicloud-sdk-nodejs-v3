

export class ImageCheckRuleResponseInfo {
    public severity?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'check_type_desc'?: string;
    private 'check_rule_name'?: string;
    private 'check_rule_id'?: string;
    private 'scan_result'?: string;
    private 'latest_scan_time'?: number;
    private 'image_num'?: number;
    public constructor() { 
    }
    public withSeverity(severity: string): ImageCheckRuleResponseInfo {
        this['severity'] = severity;
        return this;
    }
    public withCheckName(checkName: string): ImageCheckRuleResponseInfo {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ImageCheckRuleResponseInfo {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ImageCheckRuleResponseInfo {
        this['standard'] = standard;
        return this;
    }
    public withCheckTypeDesc(checkTypeDesc: string): ImageCheckRuleResponseInfo {
        this['check_type_desc'] = checkTypeDesc;
        return this;
    }
    public set checkTypeDesc(checkTypeDesc: string  | undefined) {
        this['check_type_desc'] = checkTypeDesc;
    }
    public get checkTypeDesc(): string | undefined {
        return this['check_type_desc'];
    }
    public withCheckRuleName(checkRuleName: string): ImageCheckRuleResponseInfo {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withCheckRuleId(checkRuleId: string): ImageCheckRuleResponseInfo {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withScanResult(scanResult: string): ImageCheckRuleResponseInfo {
        this['scan_result'] = scanResult;
        return this;
    }
    public set scanResult(scanResult: string  | undefined) {
        this['scan_result'] = scanResult;
    }
    public get scanResult(): string | undefined {
        return this['scan_result'];
    }
    public withLatestScanTime(latestScanTime: number): ImageCheckRuleResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withImageNum(imageNum: number): ImageCheckRuleResponseInfo {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
}