

export class ExportTaskVo {
    public action?: string;
    private 'domain_name'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'group_by'?: string;
    public interval?: number;
    private 'service_area'?: string;
    private 'stat_type'?: string;
    public country?: string;
    public province?: string;
    public isp?: string;
    public language?: string;
    public constructor() { 
    }
    public withAction(action: string): ExportTaskVo {
        this['action'] = action;
        return this;
    }
    public withDomainName(domainName: string): ExportTaskVo {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withStartTime(startTime: number): ExportTaskVo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExportTaskVo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withGroupBy(groupBy: string): ExportTaskVo {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: string  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): string | undefined {
        return this['group_by'];
    }
    public withInterval(interval: number): ExportTaskVo {
        this['interval'] = interval;
        return this;
    }
    public withServiceArea(serviceArea: string): ExportTaskVo {
        this['service_area'] = serviceArea;
        return this;
    }
    public set serviceArea(serviceArea: string  | undefined) {
        this['service_area'] = serviceArea;
    }
    public get serviceArea(): string | undefined {
        return this['service_area'];
    }
    public withStatType(statType: string): ExportTaskVo {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withCountry(country: string): ExportTaskVo {
        this['country'] = country;
        return this;
    }
    public withProvince(province: string): ExportTaskVo {
        this['province'] = province;
        return this;
    }
    public withIsp(isp: string): ExportTaskVo {
        this['isp'] = isp;
        return this;
    }
    public withLanguage(language: string): ExportTaskVo {
        this['language'] = language;
        return this;
    }
}