

export class UpdateTracingRequestBody {
    private 'tracing_ak'?: string;
    private 'tracing_sk'?: string;
    public constructor() { 
    }
    public withTracingAk(tracingAk: string): UpdateTracingRequestBody {
        this['tracing_ak'] = tracingAk;
        return this;
    }
    public set tracingAk(tracingAk: string  | undefined) {
        this['tracing_ak'] = tracingAk;
    }
    public get tracingAk(): string | undefined {
        return this['tracing_ak'];
    }
    public withTracingSk(tracingSk: string): UpdateTracingRequestBody {
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