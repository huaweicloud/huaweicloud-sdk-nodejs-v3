

export class ListCdnStatisticsRequest {
    private 'X-Sdk-Date'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'stat_type'?: string;
    public domain?: string;
    public interval?: number;
    public constructor(startTime?: string, endTime?: string, statType?: string, domain?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['stat_type'] = statType;
        this['domain'] = domain;
    }
    public withXSdkDate(xSdkDate: string): ListCdnStatisticsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withStartTime(startTime: string): ListCdnStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListCdnStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatType(statType: string): ListCdnStatisticsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string  | undefined) {
        this['stat_type'] = statType;
    }
    public get statType(): string | undefined {
        return this['stat_type'];
    }
    public withDomain(domain: string): ListCdnStatisticsRequest {
        this['domain'] = domain;
        return this;
    }
    public withInterval(interval: number): ListCdnStatisticsRequest {
        this['interval'] = interval;
        return this;
    }
}