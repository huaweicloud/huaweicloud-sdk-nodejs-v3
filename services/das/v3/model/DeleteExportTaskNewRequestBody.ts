

export class DeleteExportTaskNewRequestBody {
    private 'export_task_id'?: number;
    public constructor(exportTaskId?: number) { 
        this['export_task_id'] = exportTaskId;
    }
    public withExportTaskId(exportTaskId: number): DeleteExportTaskNewRequestBody {
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