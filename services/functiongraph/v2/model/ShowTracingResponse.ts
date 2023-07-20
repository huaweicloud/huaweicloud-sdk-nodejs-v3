
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTracingResponse extends SdkResponse {
    private 'tracing_ak'?: string;
    private 'tracing_sk'?: string;
    public constructor() { 
        super();
    }
    public withTracingAk(tracingAk: string): ShowTracingResponse {
        this['tracing_ak'] = tracingAk;
        return this;
    }
    public set tracingAk(tracingAk: string  | undefined) {
        this['tracing_ak'] = tracingAk;
    }
    public get tracingAk(): string | undefined {
        return this['tracing_ak'];
    }
    public withTracingSk(tracingSk: string): ShowTracingResponse {
        this['tracing_sk'] = tracingSk;
        return this;
    }
    public set tracingSk(tracingSk: string  | undefined) {
        this['tracing_sk'] = tracingSk;
    }
    public get tracingSk(): string | undefined {
        return this['tracing_sk'];
    }
}