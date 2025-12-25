

export class LayoutCommonRsp {
    public code?: string;
    public message?: string;
    private 'request_id'?: string;
    public success?: boolean;
    public constructor() { 
    }
    public withCode(code: string): LayoutCommonRsp {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): LayoutCommonRsp {
        this['message'] = message;
        return this;
    }
    public withRequestId(requestId: string): LayoutCommonRsp {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withSuccess(success: boolean): LayoutCommonRsp {
        this['success'] = success;
        return this;
    }
}