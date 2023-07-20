import { ModDeviceDTO } from './ModDeviceDTO';


export class UpdateDeviceRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public sn?: string;
    public body?: ModDeviceDTO;
    public constructor(sn?: string) { 
        this['sn'] = sn;
    }
    public withXRequestId(xRequestId: string): UpdateDeviceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateDeviceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withSn(sn: string): UpdateDeviceRequest {
        this['sn'] = sn;
        return this;
    }
    public withBody(body: ModDeviceDTO): UpdateDeviceRequest {
        this['body'] = body;
        return this;
    }
}