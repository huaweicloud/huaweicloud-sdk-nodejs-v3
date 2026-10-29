

export class ShowTaskInfoByIdRequest {
    private 'task_id'?: string;
    private 'merge_id'?: string;
    private 'job_id'?: string;
    public operator?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowTaskInfoByIdRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withMergeId(mergeId: string): ShowTaskInfoByIdRequest {
        this['merge_id'] = mergeId;
        return this;
    }
    public set mergeId(mergeId: string  | undefined) {
        this['merge_id'] = mergeId;
    }
    public get mergeId(): string | undefined {
        return this['merge_id'];
    }
    public withJobId(jobId: string): ShowTaskInfoByIdRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOperator(operator: string): ShowTaskInfoByIdRequest {
        this['operator'] = operator;
        return this;
    }
}