import { AudioModerationResultRequestParams } from './AudioModerationResultRequestParams';
import { AudioModerationResultResult } from './AudioModerationResultResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueryAudioModerationJobResponse extends SdkResponse {
    private 'job_id'?: string;
    public status?: RunQueryAudioModerationJobResponseStatusEnum | string;
    public result?: AudioModerationResultResult;
    private 'request_params'?: AudioModerationResultRequestParams;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): RunQueryAudioModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: RunQueryAudioModerationJobResponseStatusEnum | string): RunQueryAudioModerationJobResponse {
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
    public set requestParams(requestParams: AudioModerationResultRequestParams  | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams(): AudioModerationResultRequestParams | undefined {
        return this['request_params'];
    }
    public withCreateTime(createTime: string): RunQueryAudioModerationJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RunQueryAudioModerationJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withRequestId(requestId: string): RunQueryAudioModerationJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
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
