

export class ShowWorkflowExecutionForPageRequest {
    private 'workflow_id': string | undefined;
    public offset: number;
    public limit: number;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(workflowId?: any, offset?: any, limit?: any) { 
        this['workflow_id'] = workflowId;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionForPageRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
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
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowWorkflowExecutionForPageRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}