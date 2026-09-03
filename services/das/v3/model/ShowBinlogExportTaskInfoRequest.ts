

export class ShowBinlogExportTaskInfoRequest {
    private 'connection_id'?: string;
    private 'export_task_id'?: number;
    public constructor(connectionId?: string, exportTaskId?: number) { 
        this['connection_id'] = connectionId;
        this['export_task_id'] = exportTaskId;
    }
    public withConnectionId(connectionId: string): ShowBinlogExportTaskInfoRequest {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withExportTaskId(exportTaskId: number): ShowBinlogExportTaskInfoRequest {
        this['export_task_id'] = exportTaskId;
        return this;
    }
    public set exportTaskId(exportTaskId: number  | undefined) {
        this['export_task_id'] = exportTaskId;
    }
    public get exportTaskId(): number | undefined {
        return this['export_task_id'];
    }
}