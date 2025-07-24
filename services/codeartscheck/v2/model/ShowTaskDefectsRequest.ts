

export class ShowTaskDefectsRequest {
    private 'task_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'status_ids'?: string;
    public severity?: string;
    public constructor(taskId?: string) { 
        this['task_id'] = taskId;
    }
    public withTaskId(taskId: string): ShowTaskDefectsRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withOffset(offset: number): ShowTaskDefectsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTaskDefectsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatusIds(statusIds: string): ShowTaskDefectsRequest {
        this['status_ids'] = statusIds;
        return this;
    }
    public set statusIds(statusIds: string  | undefined) {
        this['status_ids'] = statusIds;
    }
    public get statusIds(): string | undefined {
        return this['status_ids'];
    }
    public withSeverity(severity: string): ShowTaskDefectsRequest {
        this['severity'] = severity;
        return this;
    }
}