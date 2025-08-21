

export class ReportProfileVO {
    private 'profile_id'?: string;
    public name?: string;
    public category?: string;
    public status?: number;
    private 'report_id'?: string;
    private 'last_time'?: number;
    public constructor() { 
    }
    public withProfileId(profileId: string): ReportProfileVO {
        this['profile_id'] = profileId;
        return this;
    }
    public set profileId(profileId: string  | undefined) {
        this['profile_id'] = profileId;
    }
    public get profileId(): string | undefined {
        return this['profile_id'];
    }
    public withName(name: string): ReportProfileVO {
        this['name'] = name;
        return this;
    }
    public withCategory(category: string): ReportProfileVO {
        this['category'] = category;
        return this;
    }
    public withStatus(status: number): ReportProfileVO {
        this['status'] = status;
        return this;
    }
    public withReportId(reportId: string): ReportProfileVO {
        this['report_id'] = reportId;
        return this;
    }
    public set reportId(reportId: string  | undefined) {
        this['report_id'] = reportId;
    }
    public get reportId(): string | undefined {
        return this['report_id'];
    }
    public withLastTime(lastTime: number): ReportProfileVO {
        this['last_time'] = lastTime;
        return this;
    }
    public set lastTime(lastTime: number  | undefined) {
        this['last_time'] = lastTime;
    }
    public get lastTime(): number | undefined {
        return this['last_time'];
    }
}