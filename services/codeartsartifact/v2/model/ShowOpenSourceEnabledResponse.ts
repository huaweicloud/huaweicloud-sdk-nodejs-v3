import { StandarBaseResponseV5 } from './StandarBaseResponseV5';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOpenSourceEnabledResponse extends SdkResponse {
    public status?: ShowOpenSourceEnabledResponseStatusEnum | string;
    private 'trace_id'?: string;
    public result?: boolean;
    public constructor() { 
        super();
    }
    public withStatus(status: ShowOpenSourceEnabledResponseStatusEnum | string): ShowOpenSourceEnabledResponse {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): ShowOpenSourceEnabledResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: boolean): ShowOpenSourceEnabledResponse {
        this['result'] = result;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowOpenSourceEnabledResponseStatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
