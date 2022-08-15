import { AudioModerationResultRequestParams } from './AudioModerationResultRequestParams';
import { AudioModerationResultResult } from './AudioModerationResultResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueryAudioModerationJobResponse extends SdkResponse {
    private 'job_id'?: string | undefined;
    public status?: RunQueryAudioModerationJobResponseStatusEnum;
    public result?: AudioModerationResultResult;
    private 'request_params'?: AudioModerationResultRequestParams | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): RunQueryAudioModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStatus(status: RunQueryAudioModerationJobResponseStatusEnum): RunQueryAudioModerationJobResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: AudioModerationResultResult): RunQueryAudioModerationJobResponse {
        this['result'] = result;
        return this;
    }
    public withRequestParams(requestParams: AudioModerationResultRequestParams): RunQueryAudioModerationJobResponse {
        this['request_params'] = requestParams;
        return this;
    }
    public set requestParams(requestParams: AudioModerationResultRequestParams | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams() {
        return this['request_params'];
    }
    public withCreateTime(createTime: string): RunQueryAudioModerationJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RunQueryAudioModerationJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withRequestId(requestId: string): RunQueryAudioModerationJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunQueryAudioModerationJobResponseStatusEnum {
    RUNNING = 'running',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}
