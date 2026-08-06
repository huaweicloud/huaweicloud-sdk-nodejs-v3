
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowExportTaskInfoResponse extends SdkResponse {
    private 'create_at'?: number;
    private 'download_url'?: string;
    private 'end_time'?: number;
    private 'export_line_num'?: number;
    private 'instance_id'?: string;
    private 'last_record_time'?: number;
    private 'start_time'?: number;
    private 'task_id'?: number;
    private 'task_status'?: number;
    public constructor() { 
        super();
    }
    public withCreateAt(createAt: number): ShowExportTaskInfoResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withDownloadUrl(downloadUrl: string): ShowExportTaskInfoResponse {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withEndTime(endTime: number): ShowExportTaskInfoResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withExportLineNum(exportLineNum: number): ShowExportTaskInfoResponse {
        this['export_line_num'] = exportLineNum;
        return this;
    }
    public set exportLineNum(exportLineNum: number  | undefined) {
        this['export_line_num'] = exportLineNum;
    }
    public get exportLineNum(): number | undefined {
        return this['export_line_num'];
    }
    public withInstanceId(instanceId: string): ShowExportTaskInfoResponse {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLastRecordTime(lastRecordTime: number): ShowExportTaskInfoResponse {
        this['last_record_time'] = lastRecordTime;
        return this;
    }
    public set lastRecordTime(lastRecordTime: number  | undefined) {
        this['last_record_time'] = lastRecordTime;
    }
    public get lastRecordTime(): number | undefined {
        return this['last_record_time'];
    }
    public withStartTime(startTime: number): ShowExportTaskInfoResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withTaskId(taskId: number): ShowExportTaskInfoResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withTaskStatus(taskStatus: number): ShowExportTaskInfoResponse {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
}