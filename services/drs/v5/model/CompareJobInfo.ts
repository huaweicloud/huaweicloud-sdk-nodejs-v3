

export class CompareJobInfo {
    public id?: string;
    public type?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public status?: CompareJobInfoStatusEnum | string;
    private 'compute_type'?: string;
    private 'export_status'?: string;
    private 'report_remain_seconds'?: string;
    private 'compare_job_tag'?: { [key: string]: string; };
    public options?: { [key: string]: string; };
    private 'error_msg'?: string;
    private 'dynamic_compare_delay'?: number;
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
    public withStatus(status: CompareJobInfoStatusEnum | string): CompareJobInfo {
        this['status'] = status;
        return this;
    }
    public withComputeType(computeType: string): CompareJobInfo {
        this['compute_type'] = computeType;
        return this;
    }
    public set computeType(computeType: string  | undefined) {
        this['compute_type'] = computeType;
    }
    public get computeType(): string | undefined {
        return this['compute_type'];
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
    public withReportRemainSeconds(reportRemainSeconds: string): CompareJobInfo {
        this['report_remain_seconds'] = reportRemainSeconds;
        return this;
    }
    public set reportRemainSeconds(reportRemainSeconds: string  | undefined) {
        this['report_remain_seconds'] = reportRemainSeconds;
    }
    public get reportRemainSeconds(): string | undefined {
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
    public withOptions(options: { [key: string]: string; }): CompareJobInfo {
        this['options'] = options;
        return this;
    }
    public withErrorMsg(errorMsg: string): CompareJobInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withDynamicCompareDelay(dynamicCompareDelay: number): CompareJobInfo {
        this['dynamic_compare_delay'] = dynamicCompareDelay;
        return this;
    }
    public set dynamicCompareDelay(dynamicCompareDelay: number  | undefined) {
        this['dynamic_compare_delay'] = dynamicCompareDelay;
    }
    public get dynamicCompareDelay(): number | undefined {
        return this['dynamic_compare_delay'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CompareJobInfoStatusEnum {
    RUNNING = 'RUNNING',
    WAITING_FOR_RUNNING = 'WAITING_FOR_RUNNING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED',
    TIMEOUT_INTERRUPT = 'TIMEOUT_INTERRUPT',
    FULL_DOING = 'FULL_DOING',
    INCRE_DOING = 'INCRE_DOING'
}
