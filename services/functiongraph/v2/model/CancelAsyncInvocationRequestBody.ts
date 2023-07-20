

export class CancelAsyncInvocationRequestBody {
    private 'request_id'?: string;
    public type?: CancelAsyncInvocationRequestBodyTypeEnum | string;
    public constructor(requestId?: string) { 
        this['request_id'] = requestId;
    }
    public withRequestId(requestId: string): CancelAsyncInvocationRequestBody {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withType(type: CancelAsyncInvocationRequestBodyTypeEnum | string): CancelAsyncInvocationRequestBody {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CancelAsyncInvocationRequestBodyTypeEnum {
    FORCE = 'force',
    RECURSIVE = 'recursive'
}
