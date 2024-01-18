

export class ListCdnDomainTopRefersRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'domain_name'?: string;
    private 'stat_type'?: string;
    private 'service_area'?: string;
    private 'enterprise_project_id'?: string;
    private 'include_ratio'?: boolean;
    public constructor(startTime?: number, endTime?: number, domainName?: string, statType?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withStartTime(startTime: number): ListCdnDomainTopRefersRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListCdnDomainTopRefersRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ListCdnDomainTopRefersRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStatType(statType: string): ListCdnDomainTopRefersRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withServiceArea(serviceArea: string): ListCdnDomainTopRefersRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCdnDomainTopRefersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withIncludeRatio(includeRatio: boolean): ListCdnDomainTopRefersRequest {
        this['include_ratio'] = includeRatio;
        return this;
    }
    public set includeRatio(includeRatio: boolean  | undefined) {
        this['include_ratio'] = includeRatio;
    }
    public get includeRatio(): boolean | undefined {
        return this['include_ratio'];
    }
}