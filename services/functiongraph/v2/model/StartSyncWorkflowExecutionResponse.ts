import { SyncExecutionNodeErrorDetail } from './SyncExecutionNodeErrorDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartSyncWorkflowExecutionResponse extends SdkResponse {
    private 'execution_id'?: string | undefined;
    public status?: StartSyncWorkflowExecutionResponseStatusEnum;
    public output?: object;
    public errors?: Array<SyncExecutionNodeErrorDetail>;
    private 'begin_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
        super();
    }
    public withExecutionId(executionId: string): StartSyncWorkflowExecutionResponse {
        this['execution_id'] = executionId;
        return this;
    }
    public set executionId(executionId: string | undefined) {
        this['execution_id'] = executionId;
    }
    public get executionId() {
        return this['execution_id'];
    }
    public withStatus(status: StartSyncWorkflowExecutionResponseStatusEnum): StartSyncWorkflowExecutionResponse {
        this['status'] = status;
        return this;
    }
    public withOutput(output: object): StartSyncWorkflowExecutionResponse {
        this['output'] = output;
        return this;
    }
    public withErrors(errors: Array<SyncExecutionNodeErrorDetail>): StartSyncWorkflowExecutionResponse {
        this['errors'] = errors;
        return this;
    }
    public withBeginTime(beginTime: string): StartSyncWorkflowExecutionResponse {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime() {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): StartSyncWorkflowExecutionResponse {
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
export enum StartSyncWorkflowExecutionResponseStatusEnum {
    SUCCESS = 'success',
    FAIL = 'fail',
    TIMEOUT = 'timeout'
}
