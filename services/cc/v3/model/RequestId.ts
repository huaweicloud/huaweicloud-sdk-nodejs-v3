

export class RequestId {
    private 'request_id'?: string;
    public constructor(requestId?: string) { 
        this['request_id'] = requestId;
    }
    public withRequestId(requestId: string): RequestId {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}