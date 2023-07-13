
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTracingResponse extends SdkResponse {
    private 'tracing_ak'?: string | undefined;
    private 'tracing_sk'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTracingAk(tracingAk: string): ShowTracingResponse {
        this['tracing_ak'] = tracingAk;
        return this;
    }
    public set tracingAk(tracingAk: string | undefined) {
        this['tracing_ak'] = tracingAk;
    }
    public get tracingAk() {
        return this['tracing_ak'];
    }
    public withTracingSk(tracingSk: string): ShowTracingResponse {
        this['tracing_sk'] = tracingSk;
        return this;
    }
    public set tracingSk(tracingSk: string | undefined) {
        this['tracing_sk'] = tracingSk;
    }
    public get tracingSk() {
        return this['tracing_sk'];
    }
}