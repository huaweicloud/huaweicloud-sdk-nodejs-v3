

export class DeleteTranscodingTaskByConsoleRequest {
    private 'task_id': number | undefined;
    public constructor(taskId?: any) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: number): DeleteTranscodingTaskByConsoleRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: number | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}