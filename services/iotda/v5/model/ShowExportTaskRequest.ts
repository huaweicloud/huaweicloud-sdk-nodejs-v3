

export class ShowExportTaskRequest {
    private 'Instance-Id'?: string;
    private 'export_task_id'?: string;
    public constructor(exportTaskId?: string) { 
        this['export_task_id'] = exportTaskId;
    }
    public withInstanceId(instanceId: string): ShowExportTaskRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withExportTaskId(exportTaskId: string): ShowExportTaskRequest {
        this['export_task_id'] = exportTaskId;
        return this;
    }
    public set exportTaskId(exportTaskId: string  | undefined) {
        this['export_task_id'] = exportTaskId;
    }
    public get exportTaskId(): string | undefined {
        return this['export_task_id'];
    }
}