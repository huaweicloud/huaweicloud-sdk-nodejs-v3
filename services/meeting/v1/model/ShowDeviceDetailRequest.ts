

export class ShowDeviceDetailRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public sn?: string;
    public constructor(sn?: string) { 
        this['sn'] = sn;
    }
    public withXRequestId(xRequestId: string): ShowDeviceDetailRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowDeviceDetailRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withSn(sn: string): ShowDeviceDetailRequest {
        this['sn'] = sn;
        return this;
    }
}