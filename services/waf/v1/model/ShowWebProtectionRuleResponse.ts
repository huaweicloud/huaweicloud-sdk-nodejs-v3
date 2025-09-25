
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWebProtectionRuleResponse extends SdkResponse {
    public id?: string;
    private 'cve_number'?: string;
    private 'risk_level'?: ShowWebProtectionRuleResponseRiskLevelEnum | number;
    private 'application_type'?: string;
    private 'protection_type'?: string;
    public description?: string;
    private 'create_time'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowWebProtectionRuleResponse {
        this['id'] = id;
        return this;
    }
    public withCveNumber(cveNumber: string): ShowWebProtectionRuleResponse {
        this['cve_number'] = cveNumber;
        return this;
    }
    public set cveNumber(cveNumber: string  | undefined) {
        this['cve_number'] = cveNumber;
    }
    public get cveNumber(): string | undefined {
        return this['cve_number'];
    }
    public withRiskLevel(riskLevel: ShowWebProtectionRuleResponseRiskLevelEnum | number): ShowWebProtectionRuleResponse {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ShowWebProtectionRuleResponseRiskLevelEnum | number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ShowWebProtectionRuleResponseRiskLevelEnum | number | undefined {
        return this['risk_level'];
    }
    public withApplicationType(applicationType: string): ShowWebProtectionRuleResponse {
        this['application_type'] = applicationType;
        return this;
    }
    public set applicationType(applicationType: string  | undefined) {
        this['application_type'] = applicationType;
    }
    public get applicationType(): string | undefined {
        return this['application_type'];
    }
    public withProtectionType(protectionType: string): ShowWebProtectionRuleResponse {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withDescription(description: string): ShowWebProtectionRuleResponse {
        this['description'] = description;
        return this;
    }
    public withCreateTime(createTime: number): ShowWebProtectionRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWebProtectionRuleResponseRiskLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
