

export class ExportTaskItem {
    private 'task_id'?: string;
    private 'file_name'?: string;
    public status?: ExportTaskItemStatusEnum | string;
    private 'fail_reason'?: string;
    private 'error_code'?: string;
    private 'create_time'?: string;
    private 'end_time'?: string;
    private 'is_download'?: boolean;
    public constructor() { 
    }
    public withTaskId(taskId: string): ExportTaskItem {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withFileName(fileName: string): ExportTaskItem {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withStatus(status: ExportTaskItemStatusEnum | string): ExportTaskItem {
        this['status'] = status;
        return this;
    }
    public withFailReason(failReason: string): ExportTaskItem {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withErrorCode(errorCode: string): ExportTaskItem {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withCreateTime(createTime: string): ExportTaskItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withEndTime(endTime: string): ExportTaskItem {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withIsDownload(isDownload: boolean): ExportTaskItem {
        this['is_download'] = isDownload;
        return this;
    }
    public set isDownload(isDownload: boolean  | undefined) {
        this['is_download'] = isDownload;
    }
    public get isDownload(): boolean | undefined {
        return this['is_download'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportTaskItemStatusEnum {
    CREATING = 'CREATING',
    SUCCESS = 'SUCCESS',
    FAIL = 'FAIL',
    EXPIRED = 'EXPIRED'
}
