

export class ShowWorkflowExecutionForPageRequest {
    private 'workflow_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(workflowId?: string, offset?: number, limit?: number) { 
        this['workflow_id'] = workflowId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionForPageRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withOffset(offset: number): ShowWorkflowExecutionForPageRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowWorkflowExecutionForPageRequest {
        this['limit'] = limit;
        return this;
    }
    public withStartTime(startTime: string): ShowWorkflowExecutionForPageRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowWorkflowExecutionForPageRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}