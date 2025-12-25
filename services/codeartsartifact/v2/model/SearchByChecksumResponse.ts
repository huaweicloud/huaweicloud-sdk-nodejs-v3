import { ArtifactSearchResult } from './ArtifactSearchResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchByChecksumResponse extends SdkResponse {
    public status?: SearchByChecksumResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<ArtifactSearchResult>;
    public constructor() { 
        super();
    }
    public withStatus(status: SearchByChecksumResponseStatusEnum | string): SearchByChecksumResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): SearchByChecksumResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<ArtifactSearchResult>): SearchByChecksumResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SearchByChecksumResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
