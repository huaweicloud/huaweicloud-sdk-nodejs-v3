

export class ApiTestResponseHeader {
    private 'result_status'?: string;
    private 'content_length'?: number;
    public connection?: string;
    private 'cache_control'?: string;
    private 'content_type'?: string;
    public date?: string;
    private 'x_request_id'?: string;
    public constructor() { 
    }
    public withResultStatus(resultStatus: string): ApiTestResponseHeader {
        this['result_status'] = resultStatus;
        return this;
    }
    public set resultStatus(resultStatus: string  | undefined) {
        this['result_status'] = resultStatus;
    }
    public get resultStatus(): string | undefined {
        return this['result_status'];
    }
    public withContentLength(contentLength: number): ApiTestResponseHeader {
        this['content_length'] = contentLength;
        return this;
    }
    public set contentLength(contentLength: number  | undefined) {
        this['content_length'] = contentLength;
    }
    public get contentLength(): number | undefined {
        return this['content_length'];
    }
    public withConnection(connection: string): ApiTestResponseHeader {
        this['connection'] = connection;
        return this;
    }
    public withCacheControl(cacheControl: string): ApiTestResponseHeader {
        this['cache_control'] = cacheControl;
        return this;
    }
    public set cacheControl(cacheControl: string  | undefined) {
        this['cache_control'] = cacheControl;
    }
    public get cacheControl(): string | undefined {
        return this['cache_control'];
    }
    public withContentType(contentType: string): ApiTestResponseHeader {
        this['content_type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content_type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content_type'];
    }
    public withDate(date: string): ApiTestResponseHeader {
        this['date'] = date;
        return this;
    }
    public withXRequestId(xRequestId: string): ApiTestResponseHeader {
        this['x_request_id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['x_request_id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['x_request_id'];
    }
}