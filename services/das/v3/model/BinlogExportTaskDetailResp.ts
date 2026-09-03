

export class BinlogExportTaskDetailResp {
    private 'task_id'?: number;
    private 'instance_id'?: string;
    private 'task_status'?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'last_record_time'?: number;
    private 'create_at'?: number;
    private 'export_line_num'?: number;
    private 'download_url'?: string;
    private 'source_file_name'?: string;
    private 'parse_task_id'?: number;
    public constructor() { 
    }
    public withTaskId(taskId: number): BinlogExportTaskDetailResp {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): number | undefined {
        return this['task_id'];
    }
    public withInstanceId(instanceId: string): BinlogExportTaskDetailResp {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTaskStatus(taskStatus: number): BinlogExportTaskDetailResp {
        this['task_status'] = taskStatus;
        return this;
    }
    public set taskStatus(taskStatus: number  | undefined) {
        this['task_status'] = taskStatus;
    }
    public get taskStatus(): number | undefined {
        return this['task_status'];
    }
    public withStartTime(startTime: number): BinlogExportTaskDetailResp {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): BinlogExportTaskDetailResp {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withLastRecordTime(lastRecordTime: number): BinlogExportTaskDetailResp {
        this['last_record_time'] = lastRecordTime;
        return this;
    }
    public set lastRecordTime(lastRecordTime: number  | undefined) {
        this['last_record_time'] = lastRecordTime;
    }
    public get lastRecordTime(): number | undefined {
        return this['last_record_time'];
    }
    public withCreateAt(createAt: number): BinlogExportTaskDetailResp {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withExportLineNum(exportLineNum: number): BinlogExportTaskDetailResp {
        this['export_line_num'] = exportLineNum;
        return this;
    }
    public set exportLineNum(exportLineNum: number  | undefined) {
        this['export_line_num'] = exportLineNum;
    }
    public get exportLineNum(): number | undefined {
        return this['export_line_num'];
    }
    public withDownloadUrl(downloadUrl: string): BinlogExportTaskDetailResp {
        this['download_url'] = downloadUrl;
        return this;
    }
    public set downloadUrl(downloadUrl: string  | undefined) {
        this['download_url'] = downloadUrl;
    }
    public get downloadUrl(): string | undefined {
        return this['download_url'];
    }
    public withSourceFileName(sourceFileName: string): BinlogExportTaskDetailResp {
        this['source_file_name'] = sourceFileName;
        return this;
    }
    public set sourceFileName(sourceFileName: string  | undefined) {
        this['source_file_name'] = sourceFileName;
    }
    public get sourceFileName(): string | undefined {
        return this['source_file_name'];
    }
    public withParseTaskId(parseTaskId: number): BinlogExportTaskDetailResp {
        this['parse_task_id'] = parseTaskId;
        return this;
    }
    public set parseTaskId(parseTaskId: number  | undefined) {
        this['parse_task_id'] = parseTaskId;
    }
    public get parseTaskId(): number | undefined {
        return this['parse_task_id'];
    }
}