import { ModDeviceDTO } from './ModDeviceDTO';


export class UpdateDeviceRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    public sn: string;
    public body?: ModDeviceDTO;
    public constructor(sn?: any) { 
        this['sn'] = sn;
    }
    public withXRequestId(xRequestId: string): UpdateDeviceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UpdateDeviceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
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