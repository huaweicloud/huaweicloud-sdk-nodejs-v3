import { SearchArtifactsResult } from './SearchArtifactsResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchArtifactsResponse extends SdkResponse {
    public status?: SearchArtifactsResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: SearchArtifactsResult;
    public constructor() { 
        super();
    }
    public withStatus(status: SearchArtifactsResponseStatusEnum | string): SearchArtifactsResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): SearchArtifactsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: SearchArtifactsResult): SearchArtifactsResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchArtifactsResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
