

export class LtslogInfo {
    public status?: string;
    public id?: string;
    private 'log_type'?: string;
    private 'log_desc'?: string;
    private 'access_url'?: string;
    private 'report_interval'?: number;
    private 'max_report_size'?: number;
    public constructor(status?: string, id?: string, logType?: string, logDesc?: string, accessUrl?: string) { 
        this['status'] = status;
        this['id'] = id;
        this['log_type'] = logType;
        this['log_desc'] = logDesc;
        this['access_url'] = accessUrl;
    }
    public withStatus(status: string): LtslogInfo {
        this['status'] = status;
        return this;
    }
    public withId(id: string): LtslogInfo {
        this['id'] = id;
        return this;
    }
    public withLogType(logType: string): LtslogInfo {
        this['log_type'] = logType;
        return this;
    }
    public set logType(logType: string  | undefined) {
        this['log_type'] = logType;
    }
    public get logType(): string | undefined {
        return this['log_type'];
    }
    public withLogDesc(logDesc: string): LtslogInfo {
        this['log_desc'] = logDesc;
        return this;
    }
    public set logDesc(logDesc: string  | undefined) {
        this['log_desc'] = logDesc;
    }
    public get logDesc(): string | undefined {
        return this['log_desc'];
    }
    public withAccessUrl(accessUrl: string): LtslogInfo {
        this['access_url'] = accessUrl;
        return this;
    }
    public set accessUrl(accessUrl: string  | undefined) {
        this['access_url'] = accessUrl;
    }
    public get accessUrl(): string | undefined {
        return this['access_url'];
    }
    public withReportInterval(reportInterval: number): LtslogInfo {
        this['report_interval'] = reportInterval;
        return this;
    }
    public set reportInterval(reportInterval: number  | undefined) {
        this['report_interval'] = reportInterval;
    }
    public get reportInterval(): number | undefined {
        return this['report_interval'];
    }
    public withMaxReportSize(maxReportSize: number): LtslogInfo {
        this['max_report_size'] = maxReportSize;
        return this;
    }
    public set maxReportSize(maxReportSize: number  | undefined) {
        this['max_report_size'] = maxReportSize;
    }
    public get maxReportSize(): number | undefined {
        return this['max_report_size'];
    }
}