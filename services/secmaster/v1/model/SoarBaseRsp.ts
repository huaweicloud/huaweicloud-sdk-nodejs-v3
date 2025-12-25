

export class SoarBaseRsp {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor() { 
    }
    public withCode(code: string): SoarBaseRsp {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): SoarBaseRsp {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): SoarBaseRsp {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): SoarBaseRsp {
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