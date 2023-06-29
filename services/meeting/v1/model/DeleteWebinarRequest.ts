

export class DeleteWebinarRequest {
    private 'X-Request-Id'?: string | undefined;
    private 'Accept-Language'?: string | undefined;
    private 'conference_id': string | undefined;
    public constructor(conferenceId?: any) { 
        this['conference_id'] = conferenceId;
    }
    public withXRequestId(xRequestId: string): DeleteWebinarRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): DeleteWebinarRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage() {
        return this['Accept-Language'];
    }
    public withConferenceId(conferenceId: string): DeleteWebinarRequest {
        this['conference_id'] = conferenceId;
        return this;
    }
    public set conferenceId(conferenceId: string | undefined) {
        this['conference_id'] = conferenceId;
    }
    public get conferenceId() {
        return this['conference_id'];
    }
}