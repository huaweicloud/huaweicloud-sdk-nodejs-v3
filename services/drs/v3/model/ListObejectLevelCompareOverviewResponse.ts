import { ObjectsCompareOverviewInfo } from './ObjectsCompareOverviewInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListObejectLevelCompareOverviewResponse extends SdkResponse {
    private 'create_time'?: string;
    private 'start_time'?: string;
    public status?: string;
    private 'export_status'?: string;
    private 'report_remain_seconds'?: number;
    private 'compare_job_id'?: string;
    private 'error_msg'?: string;
    private 'compare_result'?: Array<ObjectsCompareOverviewInfo>;
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: string): ListObejectLevelCompareOverviewResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withStartTime(startTime: string): ListObejectLevelCompareOverviewResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withStatus(status: string): ListObejectLevelCompareOverviewResponse {
        this['status'] = status;
        return this;
    }
    public withExportStatus(exportStatus: string): ListObejectLevelCompareOverviewResponse {
        this['export_status'] = exportStatus;
        return this;
    }
    public set exportStatus(exportStatus: string  | undefined) {
        this['export_status'] = exportStatus;
    }
    public get exportStatus(): string | undefined {
        return this['export_status'];
    }
    public withReportRemainSeconds(reportRemainSeconds: number): ListObejectLevelCompareOverviewResponse {
        this['report_remain_seconds'] = reportRemainSeconds;
        return this;
    }
    public set reportRemainSeconds(reportRemainSeconds: number  | undefined) {
        this['report_remain_seconds'] = reportRemainSeconds;
    }
    public get reportRemainSeconds(): number | undefined {
        return this['report_remain_seconds'];
    }
    public withCompareJobId(compareJobId: string): ListObejectLevelCompareOverviewResponse {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withErrorMsg(errorMsg: string): ListObejectLevelCompareOverviewResponse {
        this['error_msg'] = errorMsg;
        return this;
    }
    public set errorMsg(errorMsg: string  | undefined) {
        this['error_msg'] = errorMsg;
    }
    public get errorMsg(): string | undefined {
        return this['error_msg'];
    }
    public withCompareResult(compareResult: Array<ObjectsCompareOverviewInfo>): ListObejectLevelCompareOverviewResponse {
        this['compare_result'] = compareResult;
        return this;
    }
    public set compareResult(compareResult: Array<ObjectsCompareOverviewInfo>  | undefined) {
        this['compare_result'] = compareResult;
    }
    public get compareResult(): Array<ObjectsCompareOverviewInfo> | undefined {
        return this['compare_result'];
    }
}