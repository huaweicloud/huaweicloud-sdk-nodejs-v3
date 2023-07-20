import { NodeExecutionDetail } from './NodeExecutionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowExecutionResponse extends SdkResponse {
    private 'workflow_id'?: string;
    private 'workflow_urn'?: string;
    private 'execution_id'?: string;
    public status?: ShowWorkflowExecutionResponseStatusEnum | string;
    public headers?: object;
    public input?: object;
    public output?: object;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'last_update_time'?: string;
    private 'created_by'?: string;
    private 'node_execution_details'?: Array<NodeExecutionDetail>;
    public constructor() { 
        super();
    }
    public withWorkflowId(workflowId: string): ShowWorkflowExecutionResponse {
        this['workflow_id'] = workflowId;
        return this;
    }
    public set workflowId(workflowId: string  | undefined) {
        this['workflow_id'] = workflowId;
    }
    public get workflowId(): string | undefined {
        return this['workflow_id'];
    }
    public withWorkflowUrn(workflowUrn: string): ShowWorkflowExecutionResponse {
        this['workflow_urn'] = workflowUrn;
        return this;
    }
    public set workflowUrn(workflowUrn: string  | undefined) {
        this['workflow_urn'] = workflowUrn;
    }
    public get workflowUrn(): string | undefined {
        return this['workflow_urn'];
    }
    public withExecutionId(executionId: string): ShowWorkflowExecutionResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string  | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId(): string | undefined {
        return this['execution_id'];
    }
    public withStatus(status: ShowWorkflowExecutionResponseStatusEnum | string): ShowWorkflowExecutionResponse {
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
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): ShowWorkflowExecutionResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLastUpdateTime(lastUpdateTime: string): ShowWorkflowExecutionResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: string  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): string | undefined {
        return this['last_update_time'];
    }
    public withCreatedBy(createdBy: string): ShowWorkflowExecutionResponse {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withNodeExecutionDetails(nodeExecutionDetails: Array<NodeExecutionDetail>): ShowWorkflowExecutionResponse {
        this['node_execution_details'] = nodeExecutionDetails;
        return this;
    }
    public set nodeExecutionDetails(nodeExecutionDetails: Array<NodeExecutionDetail>  | undefined) {
        this['node_execution_details'] = nodeExecutionDetails;
    }
    public get nodeExecutionDetails(): Array<NodeExecutionDetail> | undefined {
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
