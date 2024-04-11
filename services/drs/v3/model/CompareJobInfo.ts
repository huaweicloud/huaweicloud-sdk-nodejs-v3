

export class CompareJobInfo {
    public id?: string;
    public type?: string;
    public options?: { [key: string]: string; };
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: string;
    private 'export_status'?: string;
    private 'report_remain_seconds'?: number;
    private 'compare_job_tag'?: { [key: string]: string; };
    private 'proportion_value'?: string;
    public constructor() { 
    }
    public withId(id: string): CompareJobInfo {
        this['id'] = id;
        return this;
    }
    public withType(type: string): CompareJobInfo {
        this['type'] = type;
        return this;
    }
    public withOptions(options: { [key: string]: string; }): CompareJobInfo {
        this['options'] = options;
        return this;
    }
    public withStartTime(startTime: string): CompareJobInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): CompareJobInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withStatus(status: string): CompareJobInfo {
        this['status'] = status;
        return this;
    }
    public withExportStatus(exportStatus: string): CompareJobInfo {
        this['export_status'] = exportStatus;
        return this;
    }
    public set exportStatus(exportStatus: string  | undefined) {
        this['export_status'] = exportStatus;
    }
    public get exportStatus(): string | undefined {
        return this['export_status'];
    }
    public withReportRemainSeconds(reportRemainSeconds: number): CompareJobInfo {
        this['report_remain_seconds'] = reportRemainSeconds;
        return this;
    }
    public set reportRemainSeconds(reportRemainSeconds: number  | undefined) {
        this['report_remain_seconds'] = reportRemainSeconds;
    }
    public get reportRemainSeconds(): number | undefined {
        return this['report_remain_seconds'];
    }
    public withCompareJobTag(compareJobTag: { [key: string]: string; }): CompareJobInfo {
        this['compare_job_tag'] = compareJobTag;
        return this;
    }
    public set compareJobTag(compareJobTag: { [key: string]: string; }  | undefined) {
        this['compare_job_tag'] = compareJobTag;
    }
    public get compareJobTag(): { [key: string]: string; } | undefined {
        return this['compare_job_tag'];
    }
    public withProportionValue(proportionValue: string): CompareJobInfo {
        this['proportion_value'] = proportionValue;
        return this;
    }
    public set proportionValue(proportionValue: string  | undefined) {
        this['proportion_value'] = proportionValue;
    }
    public get proportionValue(): string | undefined {
        return this['proportion_value'];
    }
}