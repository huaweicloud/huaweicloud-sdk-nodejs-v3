

export class StandarBaseResponseV5 {
    public status?: StandarBaseResponseV5StatusEnum | string;
    private 'trace_id'?: string;
    public constructor() { 
    }
    public withStatus(status: StandarBaseResponseV5StatusEnum | string): StandarBaseResponseV5 {
        this['status'] = status;
        return this;
    }
    public withTraceId(traceId: string): StandarBaseResponseV5 {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum StandarBaseResponseV5StatusEnum {
    SUCCESS = 'success',
    ERROR = 'error'
}
