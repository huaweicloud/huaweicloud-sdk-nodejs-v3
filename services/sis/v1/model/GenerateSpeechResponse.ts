import { GenerateSpeechRspResult } from './GenerateSpeechRspResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GenerateSpeechResponse extends SdkResponse {
    private 'trace_id'?: string;
    public result?: GenerateSpeechRspResult;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): GenerateSpeechResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: GenerateSpeechRspResult): GenerateSpeechResponse {
        this['result'] = result;
        return this;
    }
}