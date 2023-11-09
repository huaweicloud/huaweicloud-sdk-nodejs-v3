import { DocumentQueryResponseRequestParams } from './DocumentQueryResponseRequestParams';
import { DocumentQueryResponseResult } from './DocumentQueryResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunQueryDocumentModerationJobResponse extends SdkResponse {
    private 'job_id'?: string;
    public status?: string;
    public result?: DocumentQueryResponseResult;
    private 'request_params'?: DocumentQueryResponseRequestParams;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): RunQueryDocumentModerationJobResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: string): RunQueryDocumentModerationJobResponse {
        this['status'] = status;
        return this;
    }
    public withResult(result: DocumentQueryResponseResult): RunQueryDocumentModerationJobResponse {
        this['result'] = result;
        return this;
    }
    public withRequestParams(requestParams: DocumentQueryResponseRequestParams): RunQueryDocumentModerationJobResponse {
        this['request_params'] = requestParams;
        return this;
    }
    public set requestParams(requestParams: DocumentQueryResponseRequestParams  | undefined) {
        this['request_params'] = requestParams;
    }
    public get requestParams(): DocumentQueryResponseRequestParams | undefined {
        return this['request_params'];
    }
    public withCreateTime(createTime: string): RunQueryDocumentModerationJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): RunQueryDocumentModerationJobResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withRequestId(requestId: string): RunQueryDocumentModerationJobResponse {
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