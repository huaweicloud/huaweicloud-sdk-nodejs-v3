

export class ShowSecurityCheckClusterReportRequest {
    private 'enterprise_project_id'?: string;
    private 'x-language'?: ShowSecurityCheckClusterReportRequestXLanguageEnum | string;
    private 'report_id'?: string;
    public constructor(reportId?: string) { 
        this['report_id'] = reportId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowSecurityCheckClusterReportRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withXLanguage(xLanguage: ShowSecurityCheckClusterReportRequestXLanguageEnum | string): ShowSecurityCheckClusterReportRequest {
        this['x-language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowSecurityCheckClusterReportRequestXLanguageEnum | string  | undefined) {
        this['x-language'] = xLanguage;
    }
    public get xLanguage(): ShowSecurityCheckClusterReportRequestXLanguageEnum | string | undefined {
        return this['x-language'];
    }
    public withReportId(reportId: string): ShowSecurityCheckClusterReportRequest {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecurityCheckClusterReportRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
