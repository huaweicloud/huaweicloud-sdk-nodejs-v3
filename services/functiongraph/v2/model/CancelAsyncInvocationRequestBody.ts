

export class CancelAsyncInvocationRequestBody {
    private 'request_id'?: string | undefined;
    public type?: CancelAsyncInvocationRequestBodyTypeEnum;
    public constructor() { 
    }
    public withRequestId(requestId: string): CancelAsyncInvocationRequestBody {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withType(type: CancelAsyncInvocationRequestBodyTypeEnum): CancelAsyncInvocationRequestBody {
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
