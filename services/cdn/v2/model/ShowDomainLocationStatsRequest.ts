

export class ShowDomainLocationStatsRequest {
    public action?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'domain_name'?: string;
    private 'stat_type'?: string;
    public interval?: number;
    public country?: string;
    public province?: string;
    public isp?: string;
    private 'group_by'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(action?: string, startTime?: number, endTime?: number, domainName?: string, statType?: string) { 
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
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainLocationStatsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowDomainLocationStatsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStatType(statType: string): ShowDomainLocationStatsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withInterval(interval: number): ShowDomainLocationStatsRequest {
        this['interval'] = interval;
        return this;
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
    public withGroupBy(groupBy: string): ShowDomainLocationStatsRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainLocationStatsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}