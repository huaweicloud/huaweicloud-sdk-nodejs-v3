

export class WebBasicProtectionRulesItem {
    public id?: string;
    public description?: string;
    private 'cve_number'?: string;
    private 'risk_level'?: WebBasicProtectionRulesItemRiskLevelEnum | number;
    private 'application_type'?: string;
    private 'protection_type'?: string;
    private 'effective_time'?: number;
    private 'create_time'?: number;
    private 'update_time'?: number;
    public constructor() { 
    }
    public withId(id: string): WebBasicProtectionRulesItem {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): WebBasicProtectionRulesItem {
        this['description'] = description;
        return this;
    }
    public withCveNumber(cveNumber: string): WebBasicProtectionRulesItem {
        this['cve_number'] = cveNumber;
        return this;
    }
    public set cveNumber(cveNumber: string  | undefined) {
        this['cve_number'] = cveNumber;
    }
    public get cveNumber(): string | undefined {
        return this['cve_number'];
    }
    public withRiskLevel(riskLevel: WebBasicProtectionRulesItemRiskLevelEnum | number): WebBasicProtectionRulesItem {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: WebBasicProtectionRulesItemRiskLevelEnum | number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): WebBasicProtectionRulesItemRiskLevelEnum | number | undefined {
        return this['risk_level'];
    }
    public withApplicationType(applicationType: string): WebBasicProtectionRulesItem {
        this['application_type'] = applicationType;
        return this;
    }
    public set applicationType(applicationType: string  | undefined) {
        this['application_type'] = applicationType;
    }
    public get applicationType(): string | undefined {
        return this['application_type'];
    }
    public withProtectionType(protectionType: string): WebBasicProtectionRulesItem {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withEffectiveTime(effectiveTime: number): WebBasicProtectionRulesItem {
        this['effective_time'] = effectiveTime;
        return this;
    }
    public set effectiveTime(effectiveTime: number  | undefined) {
        this['effective_time'] = effectiveTime;
    }
    public get effectiveTime(): number | undefined {
        return this['effective_time'];
    }
    public withCreateTime(createTime: number): WebBasicProtectionRulesItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): WebBasicProtectionRulesItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WebBasicProtectionRulesItemRiskLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
