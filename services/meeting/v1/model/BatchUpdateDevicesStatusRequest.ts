

export class BatchUpdateDevicesStatusRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public value?: BatchUpdateDevicesStatusRequestValueEnum | number;
    public body?: Array<string>;
    public constructor(value?: number) { 
        this['value'] = value;
    }
    public withXRequestId(xRequestId: string): BatchUpdateDevicesStatusRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchUpdateDevicesStatusRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withValue(value: BatchUpdateDevicesStatusRequestValueEnum | number): BatchUpdateDevicesStatusRequest {
        this['value'] = value;
        return this;
    }
    public withBody(body: Array<string>): BatchUpdateDevicesStatusRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchUpdateDevicesStatusRequestValueEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
