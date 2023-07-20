

export class ShowVodStatisticsRequest {
    private 'X-Sdk-Date'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public interval?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ShowVodStatisticsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withStartTime(startTime: string): ShowVodStatisticsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowVodStatisticsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withInterval(interval: number): ShowVodStatisticsRequest {
        this['interval'] = interval;
        return this;
    }
}