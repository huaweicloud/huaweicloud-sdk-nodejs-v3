

export class ListWebBasicProtectionRulesRequest {
    private 'Content-Type'?: string;
    private 'X-Language'?: ListWebBasicProtectionRulesRequestXLanguageEnum | string;
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public from?: number;
    public to?: number;
    public level?: ListWebBasicProtectionRulesRequestLevelEnum | number;
    public id?: string;
    public description?: string;
    private 'cve_number'?: string;
    private 'risk_level'?: ListWebBasicProtectionRulesRequestRiskLevelEnum | number;
    private 'protection_type_names'?: ListWebBasicProtectionRulesRequestProtectionTypeNamesEnum | string;
    private 'application_type_names'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): ListWebBasicProtectionRulesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withXLanguage(xLanguage: ListWebBasicProtectionRulesRequestXLanguageEnum | string): ListWebBasicProtectionRulesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListWebBasicProtectionRulesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListWebBasicProtectionRulesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListWebBasicProtectionRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListWebBasicProtectionRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListWebBasicProtectionRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withFrom(from: number): ListWebBasicProtectionRulesRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ListWebBasicProtectionRulesRequest {
        this['to'] = to;
        return this;
    }
    public withLevel(level: ListWebBasicProtectionRulesRequestLevelEnum | number): ListWebBasicProtectionRulesRequest {
        this['level'] = level;
        return this;
    }
    public withId(id: string): ListWebBasicProtectionRulesRequest {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): ListWebBasicProtectionRulesRequest {
        this['description'] = description;
        return this;
    }
    public withCveNumber(cveNumber: string): ListWebBasicProtectionRulesRequest {
        this['cve_number'] = cveNumber;
        return this;
    }
    public set cveNumber(cveNumber: string  | undefined) {
        this['cve_number'] = cveNumber;
    }
    public get cveNumber(): string | undefined {
        return this['cve_number'];
    }
    public withRiskLevel(riskLevel: ListWebBasicProtectionRulesRequestRiskLevelEnum | number): ListWebBasicProtectionRulesRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: ListWebBasicProtectionRulesRequestRiskLevelEnum | number  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): ListWebBasicProtectionRulesRequestRiskLevelEnum | number | undefined {
        return this['risk_level'];
    }
    public withProtectionTypeNames(protectionTypeNames: ListWebBasicProtectionRulesRequestProtectionTypeNamesEnum | string): ListWebBasicProtectionRulesRequest {
        this['protection_type_names'] = protectionTypeNames;
        return this;
    }
    public set protectionTypeNames(protectionTypeNames: ListWebBasicProtectionRulesRequestProtectionTypeNamesEnum | string  | undefined) {
        this['protection_type_names'] = protectionTypeNames;
    }
    public get protectionTypeNames(): ListWebBasicProtectionRulesRequestProtectionTypeNamesEnum | string | undefined {
        return this['protection_type_names'];
    }
    public withApplicationTypeNames(applicationTypeNames: string): ListWebBasicProtectionRulesRequest {
        this['application_type_names'] = applicationTypeNames;
        return this;
    }
    public set applicationTypeNames(applicationTypeNames: string  | undefined) {
        this['application_type_names'] = applicationTypeNames;
    }
    public get applicationTypeNames(): string | undefined {
        return this['application_type_names'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListWebBasicProtectionRulesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
/**
    * @export
    * @enum {string}
    */
export enum ListWebBasicProtectionRulesRequestLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum ListWebBasicProtectionRulesRequestRiskLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3
}
/**
    * @export
    * @enum {string}
    */
export enum ListWebBasicProtectionRulesRequestProtectionTypeNamesEnum {
    VULN = 'vuln',
    XSS = 'xss',
    CMDI = 'cmdi',
    LFI = 'lfi',
    RFI = 'rfi',
    WEBSHELL = 'webshell',
    ROBOT = 'robot',
    SQLI = 'sqli'
}
