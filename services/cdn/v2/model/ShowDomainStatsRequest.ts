

export class ShowDomainStatsRequest {
    public action: string;
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'domain_name': string | undefined;
    private 'stat_type': string | undefined;
    public interval?: number;
    private 'group_by'?: string | undefined;
    private 'service_area'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(action?: any, startTime?: any, endTime?: any, domainName?: any, statType?: any) { 
        this['action'] = action;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withAction(action: string): ShowDomainStatsRequest {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ShowDomainStatsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainStatsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowDomainStatsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withStatType(statType: string): ShowDomainStatsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
    public withInterval(interval: number): ShowDomainStatsRequest {
        this['interval'] = interval;
        return this;
    }
    public withGroupBy(groupBy: string): ShowDomainStatsRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy() {
        return this['group_by'];
    }
    public withServiceArea(serviceArea: string): ShowDomainStatsRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowDomainStatsRequest {
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