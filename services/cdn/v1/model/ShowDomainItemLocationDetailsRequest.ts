

export class ShowDomainItemLocationDetailsRequest {
    private 'enterprise_project_id'?: string | undefined;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'domain_name': string | undefined;
    private 'stat_type': string | undefined;
    public region: string;
    public isp: string;
    public constructor(startTime?: any, endTime?: any, domainName?: any, statType?: any, region?: any, isp?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
        this['region'] = region;
        this['isp'] = isp;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainItemLocationDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withStartTime(startTime: number): ShowDomainItemLocationDetailsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainItemLocationDetailsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowDomainItemLocationDetailsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withStatType(statType: string): ShowDomainItemLocationDetailsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
    public withRegion(region: string): ShowDomainItemLocationDetailsRequest {
        this['region'] = region;
        return this;
    }
    public withIsp(isp: string): ShowDomainItemLocationDetailsRequest {
        this['isp'] = isp;
        return this;
    }
}