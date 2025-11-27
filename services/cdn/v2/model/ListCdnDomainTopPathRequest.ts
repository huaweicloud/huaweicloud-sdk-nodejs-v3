

export class ListCdnDomainTopPathRequest {
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'domain_name'?: string;
    private 'stat_type'?: string;
    private 'service_area'?: string;
    private 'user_domain_id'?: string;
    public constructor(startTime?: number, endTime?: number, domainName?: string, statType?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withStartTime(startTime: number): ListCdnDomainTopPathRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListCdnDomainTopPathRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ListCdnDomainTopPathRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStatType(statType: string): ListCdnDomainTopPathRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withServiceArea(serviceArea: string): ListCdnDomainTopPathRequest {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withUserDomainId(userDomainId: string): ListCdnDomainTopPathRequest {
        this['user_domain_id'] = userDomainId;
        return this;
    }
    public set userDomainId(userDomainId: string  | undefined) {
        this['user_domain_id'] = userDomainId;
    }
    public get userDomainId(): string | undefined {
        return this['user_domain_id'];
    }
}