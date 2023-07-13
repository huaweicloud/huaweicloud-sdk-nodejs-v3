

export class ShowMeetingFileRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    private 'file_code': string | undefined;
    public constructor(fileCode?: any) { 
        this['file_code'] = fileCode;
    }
    public withXRequestId(xRequestId: string): ShowMeetingFileRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): ShowMeetingFileRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withFileCode(fileCode: string): ShowMeetingFileRequest {
        this['file_code'] = fileCode;
        return this;
    }
    public set fileCode(fileCode: string | undefined) {
        this['file_code'] = fileCode;
    }
    public get fileCode() {
        return this['file_code'];
    }
}