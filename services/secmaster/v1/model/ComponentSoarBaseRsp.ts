

export class ComponentSoarBaseRsp {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor(code?: string) { 
        this['code'] = code;
    }
    public withCode(code: string): ComponentSoarBaseRsp {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ComponentSoarBaseRsp {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ComponentSoarBaseRsp {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ComponentSoarBaseRsp {
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