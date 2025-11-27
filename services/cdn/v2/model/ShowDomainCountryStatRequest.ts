

export class ShowDomainCountryStatRequest {
    public action?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'domain_name'?: string;
    private 'stat_type'?: string;
    public country?: string;
    private 'group_by'?: string;
    private 'user_domain_id'?: string;
    public constructor(action?: string, startTime?: number, endTime?: number, domainName?: string, statType?: string) { 
        this['action'] = action;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['domain_name'] = domainName;
        this['stat_type'] = statType;
    }
    public withAction(action: string): ShowDomainCountryStatRequest {
        this['action'] = action;
        return this;
    }
    public withStartTime(startTime: number): ShowDomainCountryStatRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ShowDomainCountryStatRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withDomainName(domainName: string): ShowDomainCountryStatRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStatType(statType: string): ShowDomainCountryStatRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withCountry(country: string): ShowDomainCountryStatRequest {
        this['country'] = country;
        return this;
    }
    public withGroupBy(groupBy: string): ShowDomainCountryStatRequest {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withUserDomainId(userDomainId: string): ShowDomainCountryStatRequest {
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