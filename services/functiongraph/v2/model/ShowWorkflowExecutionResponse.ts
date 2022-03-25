import { NodeExecutionDetail } from './NodeExecutionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowExecutionResponse extends SdkResponse {
    private 'workflow_id'?: string | undefined;
    private 'workflow_urn'?: string | undefined;
    private 'execution_id'?: string | undefined;
    public status?: ShowWorkflowExecutionResponseStatusEnum;
    public headers?: object;
    public input?: object;
    public output?: object;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'last_update_time'?: string | undefined;
    private 'created_by'?: string | undefined;
    private 'node_execution_details'?: Array<NodeExecutionDetail> | undefined;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId() {
        return this['workflow_id'];
    }
    public withWorkflowUrn(workflowUrn: string): ShowWorkflowExecutionResponse {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn() {
        return this['workflow_urn'];
    }
    public withExecutionId(executionId: string): ShowWorkflowExecutionResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
    public withStatus(status: ShowWorkflowExecutionResponseStatusEnum): ShowWorkflowExecutionResponse {
        this['status'] = status;
        return this;
    }
    public withHeaders(headers: object): ShowWorkflowExecutionResponse {
        this['headers'] = headers;
        return this;
    }
    public withInput(input: object): ShowWorkflowExecutionResponse {
        this['input'] = input;
        return this;
    }
    public withOutput(output: object): ShowWorkflowExecutionResponse {
        this['output'] = output;
        return this;
    }
    public withBeginTime(beginTime: string): ShowWorkflowExecutionResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowWorkflowExecutionResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ShowWorkflowExecutionResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime() {
        return this['last_update_time'];
    }
    public withCreatedBy(createdBy: string): ShowWorkflowExecutionResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy() {
        return this['created_by'];
    }
    public withNodeExecutionDetails(nodeExecutionDetails: Array<NodeExecutionDetail>): ShowWorkflowExecutionResponse {
        this['node_execution_details'] = nodeExecutionDetails;
        return this;
    }
    public set nodeExecutionDetails(nodeExecutionDetails: Array<NodeExecutionDetail> | undefined) {
        this['node_execution_details'] = nodeExecutionDetails;
    }
    public get nodeExecutionDetails() {
        return this['node_execution_details'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowWorkflowExecutionResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    RUNNING = 'running',
    TIMEOUT = 'timeout',
    CANCEL = 'cancel'
}
