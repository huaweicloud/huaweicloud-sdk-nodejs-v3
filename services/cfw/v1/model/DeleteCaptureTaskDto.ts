

export class DeleteCaptureTaskDto {
    private 'task_ids'?: Array<string>;
    public constructor(taskIds?: Array<string>) { 
        this['task_ids'] = taskIds;
    }
    public withTaskIds(taskIds: Array<string>): DeleteCaptureTaskDto {
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