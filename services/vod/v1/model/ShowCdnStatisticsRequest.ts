

export class ShowCdnStatisticsRequest {
    private 'X-Sdk-Date'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'stat_type': string | undefined;
    public domain: string;
    public interval?: number;
    public constructor(statType?: any, domain?: any) { 
        this['stat_type'] = statType;
        this['domain'] = domain;
    }
    public withXSdkDate(xSdkDate: string): ShowCdnStatisticsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate() {
        return this['X-Sdk-Date'];
    }
    public withStartTime(startTime: string): ShowCdnStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowCdnStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withStatType(statType: string): ShowCdnStatisticsRequest {
        this['stat_type'] = statType;
        return this;
    }
    public set statType(statType: string | undefined) {
        this['stat_type'] = statType;
    }
    public get statType() {
        return this['stat_type'];
    }
    public withDomain(domain: string): ShowCdnStatisticsRequest {
        this['domain'] = domain;
        return this;
    }
    public withInterval(interval: number): ShowCdnStatisticsRequest {
        this['interval'] = interval;
        return this;
    }
}