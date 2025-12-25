import { ListAttentionPageResult } from './ListAttentionPageResult';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAttentionsResponse extends SdkResponse {
    public status?: ListAttentionsResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: ListAttentionPageResult;
    public constructor() { 
        super();
    }
    public withStatus(status: ListAttentionsResponseStatusEnum | string): ListAttentionsResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListAttentionsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: ListAttentionPageResult): ListAttentionsResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAttentionsResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
