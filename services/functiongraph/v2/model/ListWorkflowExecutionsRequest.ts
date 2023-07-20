

export class ListWorkflowExecutionsRequest {
    private 'workflow_id'?: string;
    public limit?: number;
    public status?: ListWorkflowExecutionsRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor(workflowId?: string) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowExecutionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withLimit(limit: number): ListWorkflowExecutionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListWorkflowExecutionsRequestStatusEnum | string): ListWorkflowExecutionsRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListWorkflowExecutionsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWorkflowExecutionsRequest {
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

/**
    * @export
    * @enum {string}
    */
export enum ListWorkflowExecutionsRequestStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel'
}
