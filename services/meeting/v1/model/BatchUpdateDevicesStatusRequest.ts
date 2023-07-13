

export class BatchUpdateDevicesStatusRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public value: BatchUpdateDevicesStatusRequestValueEnum;
    public body?: Array<string>;
    public constructor(value?: any) { 
        this['value'] = value;
    }
    public withXRequestId(xRequestId: string): BatchUpdateDevicesStatusRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): BatchUpdateDevicesStatusRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withValue(value: BatchUpdateDevicesStatusRequestValueEnum): BatchUpdateDevicesStatusRequest {
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
