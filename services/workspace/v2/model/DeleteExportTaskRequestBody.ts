

export class DeleteExportTaskRequestBody {
    private 'task_ids'?: Array<string>;
    public constructor() { 
    }
    public withTaskIds(taskIds: Array<string>): DeleteExportTaskRequestBody {
        this['task_ids'] = taskIds;
        return this;
    }
    public set taskIds(taskIds: Array<string>  | undefined) {
        this['task_ids'] = taskIds;
    }
    public get taskIds(): Array<string> | undefined {
        return this['task_ids'];
    }
}