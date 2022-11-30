

export class FlowExecutionBriefV2 {
    private 'workflow_id'?: string | undefined;
    private 'execution_id'?: string | undefined;
    public status?: FlowExecutionBriefV2StatusEnum;
    private 'begin_time'?: Date | undefined;
    private 'end_time'?: Date | undefined;
    private 'last_update_time'?: Date | undefined;
    private 'create_by'?: string | undefined;
    private 'workflow_urn'?: string | undefined;
    public constructor() { 
    }
    public withWorkflowId(workflowId: string): FlowExecutionBriefV2 {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withExecutionId(executionId: string): FlowExecutionBriefV2 {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
    public withStatus(status: FlowExecutionBriefV2StatusEnum): FlowExecutionBriefV2 {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: Date): FlowExecutionBriefV2 {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: Date | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: Date): FlowExecutionBriefV2 {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: Date | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: Date): FlowExecutionBriefV2 {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: Date | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime() {
        return this['last_update_time'];
    }
    public withCreateBy(createBy: string): FlowExecutionBriefV2 {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy() {
        return this['create_by'];
    }
    public withWorkflowUrn(workflowUrn: string): FlowExecutionBriefV2 {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FlowExecutionBriefV2StatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel',
    SCHEDULED = 'scheduled',
    RECOVERED = 'recovered',
    RETRYING = 'retrying',
    STOPPING = 'stopping'
}
