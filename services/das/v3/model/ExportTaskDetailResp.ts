

export class ExportTaskDetailResp {
    private 'task_id'?: number;
    private 'instance_id'?: string;
    private 'task_status'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'create_at'?: number;
    private 'export_line_num'?: number;
    private 'download_url'?: string;
    public constructor() { 
    }
    public withTaskId(taskId: number): ExportTaskDetailResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): ExportTaskDetailResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskStatus(taskStatus: number): ExportTaskDetailResp {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
    public withStartTime(startTime: number): ExportTaskDetailResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ExportTaskDetailResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withCreateAt(createAt: number): ExportTaskDetailResp {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withExportLineNum(exportLineNum: number): ExportTaskDetailResp {
        this['export_line_num'] = exportLineNum;
        return this;
    }
    public set exportLineNum(exportLineNum: number  | undefined) {
        this['export_line_num'] = exportLineNum;
    }
    public get exportLineNum(): number | undefined {
        return this['export_line_num'];
    }
    public withDownloadUrl(downloadUrl: string): ExportTaskDetailResp {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
}