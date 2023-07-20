

export class SearchCtlRecordsOfHisMeetingRequest {
    public confUUID?: string;
    public offset?: number;
    public limit?: number;
    public userUUID?: string;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    private 'Accept-Language'?: string;
    public constructor(confUUID?: string) { 
        this['confUUID'] = confUUID;
    }
    public withConfUUID(confUUID: string): SearchCtlRecordsOfHisMeetingRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withOffset(offset: number): SearchCtlRecordsOfHisMeetingRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCtlRecordsOfHisMeetingRequest {
        this['limit'] = limit;
        return this;
    }
    public withUserUUID(userUUID: string): SearchCtlRecordsOfHisMeetingRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXAuthorizationType(xAuthorizationType: string): SearchCtlRecordsOfHisMeetingRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): SearchCtlRecordsOfHisMeetingRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchCtlRecordsOfHisMeetingRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
}