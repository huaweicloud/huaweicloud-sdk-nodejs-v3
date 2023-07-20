

export class ShowMeetingFileRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    private 'file_code'?: string;
    public constructor(fileCode?: string) { 
        this['file_code'] = fileCode;
    }
    public withXRequestId(xRequestId: string): ShowMeetingFileRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowMeetingFileRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withFileCode(fileCode: string): ShowMeetingFileRequest {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string  | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode(): string | undefined {
        return this['file_code'];
    }
}