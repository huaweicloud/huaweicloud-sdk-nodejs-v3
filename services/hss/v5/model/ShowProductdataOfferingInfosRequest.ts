

export class ShowProductdataOfferingInfosRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'site_code'?: string;
    public constructor(region?: string) { 
        this['region'] = region;
    }
    public withRegion(region: string): ShowProductdataOfferingInfosRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowProductdataOfferingInfosRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withSiteCode(siteCode: string): ShowProductdataOfferingInfosRequest {
        this['site_code'] = siteCode;
        return this;
    }
    public set siteCode(siteCode: string  | undefined) {
        this['site_code'] = siteCode;
    }
    public get siteCode(): string | undefined {
        return this['site_code'];
    }
}