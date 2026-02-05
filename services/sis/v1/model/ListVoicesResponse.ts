import { VoiceListResult } from './VoiceListResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVoicesResponse extends SdkResponse {
    private 'trace_id'?: string;
    public result?: VoiceListResult;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): ListVoicesResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: VoiceListResult): ListVoicesResponse {
        this['result'] = result;
        return this;
    }
}