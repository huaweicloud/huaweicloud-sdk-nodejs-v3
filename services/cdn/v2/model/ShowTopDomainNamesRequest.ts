

export class ShowTopDomainNamesRequest {
    private 'start_time': number | undefined;
    private 'end_time': number | undefined;
    private 'stat_type': string | undefined;
    private 'service_area'?: string | undefined;
    public limit?: number;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(startTime?: any, endTime?: any, statType?: any) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['stat_type'] = statType;
    }
    public withStartTime(startTime: number): ShowTopDomainNamesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowTopDomainNamesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatType(statType: string): ShowTopDomainNamesRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
    public withServiceArea(serviceArea: string): ShowTopDomainNamesRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea() {
        return this['service_area'];
    }
    public withLimit(limit: number): ShowTopDomainNamesRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowTopDomainNamesRequest {
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