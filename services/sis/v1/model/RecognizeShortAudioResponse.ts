import { Result } from './Result';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeShortAudioResponse extends SdkResponse {
    private 'trace_id'?: string | undefined;
    public result?: Result;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): RecognizeShortAudioResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withResult(result: Result): RecognizeShortAudioResponse {
        this['result'] = result;
        return this;
    }
}