

export class ImageBuildCommandRiskResponseInfo {
    private 'latest_scan_time'?: number;
    private 'image_num'?: number;
    private 'risk_id'?: string;
    private 'rule_id'?: string;
    private 'risk_name'?: string;
    private 'risk_level'?: string;
    public description?: string;
    private 'image_type'?: string;
    public constructor() { 
    }
    public withLatestScanTime(latestScanTime: number): ImageBuildCommandRiskResponseInfo {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withImageNum(imageNum: number): ImageBuildCommandRiskResponseInfo {
        this['image_num'] = imageNum;
        return this;
    }
    public set imageNum(imageNum: number  | undefined) {
        this['image_num'] = imageNum;
    }
    public get imageNum(): number | undefined {
        return this['image_num'];
    }
    public withRiskId(riskId: string): ImageBuildCommandRiskResponseInfo {
        this['risk_id'] = riskId;
        return this;
    }
    public set riskId(riskId: string  | undefined) {
        this['risk_id'] = riskId;
    }
    public get riskId(): string | undefined {
        return this['risk_id'];
    }
    public withRuleId(ruleId: string): ImageBuildCommandRiskResponseInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRiskName(riskName: string): ImageBuildCommandRiskResponseInfo {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withRiskLevel(riskLevel: string): ImageBuildCommandRiskResponseInfo {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withDescription(description: string): ImageBuildCommandRiskResponseInfo {
        this['description'] = description;
        return this;
    }
    public withImageType(imageType: string): ImageBuildCommandRiskResponseInfo {
        this['image_type'] = imageType;
        return this;
    }
    public set imageType(imageType: string  | undefined) {
        this['image_type'] = imageType;
    }
    public get imageType(): string | undefined {
        return this['image_type'];
    }
}