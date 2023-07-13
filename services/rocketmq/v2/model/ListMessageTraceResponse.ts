import { ListMessageTraceRespTrace } from './ListMessageTraceRespTrace';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTraceResponse extends SdkResponse {
    public trace?: Array<ListMessageTraceRespTrace>;
    public constructor() { 
        super();
    }
    public withTrace(trace: Array<ListMessageTraceRespTrace>): ListMessageTraceResponse {
        this['trace'] = trace;
        return this;
    }
}