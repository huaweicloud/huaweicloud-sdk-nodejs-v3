import { CreateMavenRepoResult } from './CreateMavenRepoResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateMavenRepoResponse extends SdkResponse {
    public status?: CreateMavenRepoResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: CreateMavenRepoResult;
    public constructor() { 
        super();
    }
    public withStatus(status: CreateMavenRepoResponseStatusEnum | string): CreateMavenRepoResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): CreateMavenRepoResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: CreateMavenRepoResult): CreateMavenRepoResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMavenRepoResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
