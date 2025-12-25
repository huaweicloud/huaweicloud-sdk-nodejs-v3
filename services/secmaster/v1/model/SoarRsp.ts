

export class SoarRsp {
    public code?: string;
    public message?: string;
    public success?: boolean;
    private 'request_id'?: string;
    public total?: number;
    public offset?: number;
    public limit?: number;
    public size?: number;
    public page?: number;
    public constructor() { 
    }
    public withCode(code: string): SoarRsp {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): SoarRsp {
        this['message'] = message;
        return this;
    }
    public withSuccess(success: boolean): SoarRsp {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): SoarRsp {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTotal(total: number): SoarRsp {
        this['total'] = total;
        return this;
    }
    public withOffset(offset: number): SoarRsp {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SoarRsp {
        this['limit'] = limit;
        return this;
    }
    public withSize(size: number): SoarRsp {
        this['size'] = size;
        return this;
    }
    public withPage(page: number): SoarRsp {
        this['page'] = page;
        return this;
    }
}