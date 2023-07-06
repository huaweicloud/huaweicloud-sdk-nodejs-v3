import { ObjectsCompareOverviewInfo } from './ObjectsCompareOverviewInfo';


export class ObjectsCompareTaskInfo {
    private 'create_time'?: string | undefined;
    private 'compare_results'?: Array<ObjectsCompareOverviewInfo> | undefined;
    private 'start_time'?: string | undefined;
    public status?: ObjectsCompareTaskInfoStatusEnum;
    private 'export_status'?: string | undefined;
    private 'report_remain_seconds'?: number | undefined;
    private 'compare_job_id'?: string | undefined;
    private 'error_msg'?: string | undefined;
    public constructor() { 
    }
    public withCreateTime(createTime: string): ObjectsCompareTaskInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withCompareResults(compareResults: Array<ObjectsCompareOverviewInfo>): ObjectsCompareTaskInfo {
        this['compare_results'] = compareResults;
        return this;
    }
    public set compareResults(compareResults: Array<ObjectsCompareOverviewInfo> | undefined) {
        this['compare_results'] = compareResults;
    }
    public get compareResults() {
        return this['compare_results'];
    }
    public withStartTime(startTime: string): ObjectsCompareTaskInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withStatus(status: ObjectsCompareTaskInfoStatusEnum): ObjectsCompareTaskInfo {
        this['status'] = status;
        return this;
    }
    public withExportStatus(exportStatus: string): ObjectsCompareTaskInfo {
        this['export_status'] = exportStatus;
        return this;
    }
    public set exportStatus(exportStatus: string | undefined) {
        this['export_status'] = exportStatus;
    }
    public get exportStatus() {
        return this['export_status'];
    }
    public withReportRemainSeconds(reportRemainSeconds: number): ObjectsCompareTaskInfo {
        this['report_remain_seconds'] = reportRemainSeconds;
        return this;
    }
    public set reportRemainSeconds(reportRemainSeconds: number | undefined) {
        this['report_remain_seconds'] = reportRemainSeconds;
    }
    public get reportRemainSeconds() {
        return this['report_remain_seconds'];
    }
    public withCompareJobId(compareJobId: string): ObjectsCompareTaskInfo {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId() {
        return this['compare_job_id'];
    }
    public withErrorMsg(errorMsg: string): ObjectsCompareTaskInfo {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg() {
        return this['error_msg'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ObjectsCompareTaskInfoStatusEnum {
    RUNNING = 'RUNNING',
    WAITING_FOR_RUNNING = 'WAITING_FOR_RUNNING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED'
}
