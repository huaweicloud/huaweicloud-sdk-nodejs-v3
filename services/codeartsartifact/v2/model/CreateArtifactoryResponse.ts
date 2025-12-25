import { CreateArtifactoryResult } from './CreateArtifactoryResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateArtifactoryResponse extends SdkResponse {
    public status?: CreateArtifactoryResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: CreateArtifactoryResult;
    public constructor() { 
        super();
    }
    public withStatus(status: CreateArtifactoryResponseStatusEnum | string): CreateArtifactoryResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): CreateArtifactoryResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: CreateArtifactoryResult): CreateArtifactoryResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateArtifactoryResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
