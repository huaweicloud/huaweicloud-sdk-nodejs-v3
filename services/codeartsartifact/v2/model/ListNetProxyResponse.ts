import { NetProxyModelV5 } from './NetProxyModelV5';
import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetProxyResponse extends SdkResponse {
    public status?: ListNetProxyResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: Array<NetProxyModelV5>;
    public constructor() { 
        super();
    }
    public withStatus(status: ListNetProxyResponseStatusEnum | string): ListNetProxyResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ListNetProxyResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: Array<NetProxyModelV5>): ListNetProxyResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNetProxyResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
