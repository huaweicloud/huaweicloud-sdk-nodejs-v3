

export class ListWorkflowExecutionsRequest {
    private 'workflow_id': string | undefined;
    public limit?: number;
    public status?: ListWorkflowExecutionsRequestStatusEnum;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor(workflowId?: any) { 
        this['workflow_id'] = workflowId;
    }
    public withWorkflowId(workflowId: string): ListWorkflowExecutionsRequest {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withLimit(limit: number): ListWorkflowExecutionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListWorkflowExecutionsRequestStatusEnum): ListWorkflowExecutionsRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListWorkflowExecutionsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListWorkflowExecutionsRequest {
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
