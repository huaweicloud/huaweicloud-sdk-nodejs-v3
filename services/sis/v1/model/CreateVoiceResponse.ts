import { RegisterVoiceResponseBodyResult } from './RegisterVoiceResponseBodyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateVoiceResponse extends SdkResponse {
    private 'trace_id'?: string;
    public result?: RegisterVoiceResponseBodyResult;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): CreateVoiceResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withResult(result: RegisterVoiceResponseBodyResult): CreateVoiceResponse {
        this['result'] = result;
        return this;
    }
}