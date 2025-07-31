

export class ListIacFileRisksResponseInfoDataList {
    private 'risk_id'?: string;
    private 'rule_id'?: string;
    private 'risk_name'?: string;
    private 'risk_level'?: string;
    private 'risk_category'?: string;
    private 'risk_num'?: number;
    private 'last_scan_time'?: number;
    public description?: string;
    public remediation?: string;
    private 'build_instruction'?: string;
    public constructor() { 
    }
    public withRiskId(riskId: string): ListIacFileRisksResponseInfoDataList {
        this['risk_id'] = riskId;
        return this;
    }
    public set riskId(riskId: string  | undefined) {
        this['risk_id'] = riskId;
    }
    public get riskId(): string | undefined {
        return this['risk_id'];
    }
    public withRuleId(ruleId: string): ListIacFileRisksResponseInfoDataList {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withRiskName(riskName: string): ListIacFileRisksResponseInfoDataList {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withRiskLevel(riskLevel: string): ListIacFileRisksResponseInfoDataList {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRiskCategory(riskCategory: string): ListIacFileRisksResponseInfoDataList {
        this['risk_category'] = riskCategory;
        return this;
    }
    public set riskCategory(riskCategory: string  | undefined) {
        this['risk_category'] = riskCategory;
    }
    public get riskCategory(): string | undefined {
        return this['risk_category'];
    }
    public withRiskNum(riskNum: number): ListIacFileRisksResponseInfoDataList {
        this['risk_num'] = riskNum;
        return this;
    }
    public set riskNum(riskNum: number  | undefined) {
        this['risk_num'] = riskNum;
    }
    public get riskNum(): number | undefined {
        return this['risk_num'];
    }
    public withLastScanTime(lastScanTime: number): ListIacFileRisksResponseInfoDataList {
        this['last_scan_time'] = lastScanTime;
        return this;
    }
    public set lastScanTime(lastScanTime: number  | undefined) {
        this['last_scan_time'] = lastScanTime;
    }
    public get lastScanTime(): number | undefined {
        return this['last_scan_time'];
    }
    public withDescription(description: string): ListIacFileRisksResponseInfoDataList {
        this['description'] = description;
        return this;
    }
    public withRemediation(remediation: string): ListIacFileRisksResponseInfoDataList {
        this['remediation'] = remediation;
        return this;
    }
    public withBuildInstruction(buildInstruction: string): ListIacFileRisksResponseInfoDataList {
        this['build_instruction'] = buildInstruction;
        return this;
    }
    public set buildInstruction(buildInstruction: string  | undefined) {
        this['build_instruction'] = buildInstruction;
    }
    public get buildInstruction(): string | undefined {
        return this['build_instruction'];
    }
}