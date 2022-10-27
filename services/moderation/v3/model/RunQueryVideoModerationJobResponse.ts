import { VideoModerationResultRequestParams } from './VideoModerationResultRequestParams';
import { VideoModerationResultResult } from './VideoModerationResultResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueryVideoModerationJobResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'job_id'?: string | undefined;
    public status?: RunQueryVideoModerationJobResponseStatusEnum;
    private 'request_params'?: VideoModerationResultRequestParams | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public result?: VideoModerationResultResult;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): RunQueryVideoModerationJobResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withJobId(jobId: string): RunQueryVideoModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withStatus(status: RunQueryVideoModerationJobResponseStatusEnum): RunQueryVideoModerationJobResponse {
        this['status'] = status;
        return this;
    }
    public withRequestParams(requestParams: VideoModerationResultRequestParams): RunQueryVideoModerationJobResponse {
        this['request_params'] = requestParams;
        return this;
    }
    public set requestParams(requestParams: VideoModerationResultRequestParams | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams() {
        return this['request_params'];
    }
    public withCreateTime(createTime: string): RunQueryVideoModerationJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RunQueryVideoModerationJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withResult(result: VideoModerationResultResult): RunQueryVideoModerationJobResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunQueryVideoModerationJobResponseStatusEnum {
    RUNNING = 'running',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}
