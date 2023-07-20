import { CustomResult } from './CustomResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RunTtsResponse extends SdkResponse {
    private 'trace_id'?: string;
    public result?: CustomResult;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): RunTtsResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: CustomResult): RunTtsResponse {
        this['result'] = result;
        return this;
    }
}