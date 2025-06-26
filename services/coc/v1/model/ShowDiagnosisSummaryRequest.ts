

export class ShowDiagnosisSummaryRequest {
    private 'task_id'?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowDiagnosisSummaryRequest {
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