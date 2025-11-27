

export class ExportVo {
    public action?: string;
    private 'domain_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'group_by'?: string;
    private 'service_area'?: string;
    private 'stat_type'?: string;
    public country?: string;
    public constructor() { 
    }
    public withAction(action: string): ExportVo {
        this['action'] = action;
        return this;
    }
    public withDomainName(domainName: string): ExportVo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStartTime(startTime: number): ExportVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExportVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withGroupBy(groupBy: string): ExportVo {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withServiceArea(serviceArea: string): ExportVo {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withStatType(statType: string): ExportVo {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withCountry(country: string): ExportVo {
        this['country'] = country;
        return this;
    }
}