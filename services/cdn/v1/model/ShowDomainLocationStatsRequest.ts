

export class ShowDomainLocationStatsRequest {
    public action: string;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    public interval?: number;
    private 'domain_name': string | undefined;
    private 'stat_type': string | undefined;
    private 'group_by'?: string | undefined;
    public country?: string;
    public province?: string;
    public isp?: string;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(action?: any, startTime?: any, endTime?: any, domainName?: any, statType?: any) { 
        this['action'] = action;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withAction(action: string): ShowDomainLocationStatsRequest {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ShowDomainLocationStatsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainLocationStatsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withInterval(interval: number): ShowDomainLocationStatsRequest {
        this['interval'] = interval;
        return this;
    }
    public withDomainName(domainName: string): ShowDomainLocationStatsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withStatType(statType: string): ShowDomainLocationStatsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
    public withGroupBy(groupBy: string): ShowDomainLocationStatsRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy() {
        return this['group_by'];
    }
    public withCountry(country: string): ShowDomainLocationStatsRequest {
        this['country'] = country;
        return this;
    }
    public withProvince(province: string): ShowDomainLocationStatsRequest {
        this['province'] = province;
        return this;
    }
    public withIsp(isp: string): ShowDomainLocationStatsRequest {
        this['isp'] = isp;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainLocationStatsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}