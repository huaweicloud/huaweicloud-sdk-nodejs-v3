

export class FlowExecutionBrief {
    private 'workflow_id'?: string | undefined;
    private 'workflow_urn'?: string | undefined;
    private 'execution_id'?: string | undefined;
    public status?: FlowExecutionBriefStatusEnum;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'last_update_time'?: string | undefined;
    private 'created_by'?: string | undefined;
    public constructor() { 
    }
    public withWorkflowId(workflowId: string): FlowExecutionBrief {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withWorkflowUrn(workflowUrn: string): FlowExecutionBrief {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withExecutionId(executionId: string): FlowExecutionBrief {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
    public withStatus(status: FlowExecutionBriefStatusEnum): FlowExecutionBrief {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): FlowExecutionBrief {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): FlowExecutionBrief {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): FlowExecutionBrief {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime() {
        return this['last_update_time'];
    }
    public withCreatedBy(createdBy: string): FlowExecutionBrief {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowExecutionBriefStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel'
}
