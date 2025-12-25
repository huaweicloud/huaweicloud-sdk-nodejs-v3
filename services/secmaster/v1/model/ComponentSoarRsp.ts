

export class ComponentSoarRsp {
    public code?: string;
    public total?: number;
    public size?: number;
    public page?: number;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public constructor() { 
    }
    public withCode(code: string): ComponentSoarRsp {
        this['code'] = code;
        return this;
    }
    public withTotal(total: number): ComponentSoarRsp {
        this['total'] = total;
        return this;
    }
    public withSize(size: number): ComponentSoarRsp {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): ComponentSoarRsp {
        this['page'] = page;
        return this;
    }
    public withMessage(message: string): ComponentSoarRsp {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): ComponentSoarRsp {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ComponentSoarRsp {
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