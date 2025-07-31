

export class ShowLatestExportTaskByTypeRequest {
    private 'enterprise_project_id'?: string;
    private 'export_task_type'?: string;
    private 'task_id'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowLatestExportTaskByTypeRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withExportTaskType(exportTaskType: string): ShowLatestExportTaskByTypeRequest {
        this['export_task_type'] = exportTaskType;
        return this;
    }
    public set exportTaskType(exportTaskType: string  | undefined) {
        this['export_task_type'] = exportTaskType;
    }
    public get exportTaskType(): string | undefined {
        return this['export_task_type'];
    }
    public withTaskId(taskId: string): ShowLatestExportTaskByTypeRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}