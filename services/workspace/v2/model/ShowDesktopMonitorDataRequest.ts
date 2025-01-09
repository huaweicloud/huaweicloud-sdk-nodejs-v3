

export class ShowDesktopMonitorDataRequest {
    private 'desktop_id'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'metric_name'?: string;
    public constructor(desktopId?: string, startTime?: string, endTime?: string) { 
        this['desktop_id'] = desktopId;
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withDesktopId(desktopId: string): ShowDesktopMonitorDataRequest {
        this['desktop_id'] = desktopId;
        return this;
    }
    public set desktopId(desktopId: string  | undefined) {
        this['desktop_id'] = desktopId;
    }
    public get desktopId(): string | undefined {
        return this['desktop_id'];
    }
    public withStartTime(startTime: string): ShowDesktopMonitorDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowDesktopMonitorDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withMetricName(metricName: string): ShowDesktopMonitorDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
}