

export class BatchDeleteSubscriptionsResponseItemInfo {
    private 'request_id'?: string;
    private 'http_code'?: number;
    public code?: string;
    public message?: string;
    public constructor(requestId?: string, httpCode?: number) { 
        this['request_id'] = requestId;
        this['http_code'] = httpCode;
    }
    public withRequestId(requestId: string): BatchDeleteSubscriptionsResponseItemInfo {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withHttpCode(httpCode: number): BatchDeleteSubscriptionsResponseItemInfo {
        this['http_code'] = httpCode;
        return this;
    }
    public set httpCode(httpCode: number  | undefined) {
        this['http_code'] = httpCode;
    }
    public get httpCode(): number | undefined {
        return this['http_code'];
    }
    public withCode(code: string): BatchDeleteSubscriptionsResponseItemInfo {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): BatchDeleteSubscriptionsResponseItemInfo {
        this['message'] = message;
        return this;
    }
}