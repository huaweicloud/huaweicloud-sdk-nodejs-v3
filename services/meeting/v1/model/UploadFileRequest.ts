import { UploadFileRequestBody } from './UploadFileRequestBody';


export class UploadFileRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public body?: UploadFileRequestBody;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): UploadFileRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): UploadFileRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withBody(body: UploadFileRequestBody): UploadFileRequest {
        this['body'] = body;
        return this;
    }
}