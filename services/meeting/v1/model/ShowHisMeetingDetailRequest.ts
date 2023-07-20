

export class ShowHisMeetingDetailRequest {
    public confUUID?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public userUUID?: string;
    private 'X-Type'?: number;
    private 'X-Query-Type'?: number;
    private 'X-Authorization-Type'?: string;
    private 'X-Site-Id'?: string;
    public constructor(confUUID?: string) { 
        this['confUUID'] = confUUID;
    }
    public withConfUUID(confUUID: string): ShowHisMeetingDetailRequest {
        this['confUUID'] = confUUID;
        return this;
    }
    public withOffset(offset: number): ShowHisMeetingDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowHisMeetingDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): ShowHisMeetingDetailRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withUserUUID(userUUID: string): ShowHisMeetingDetailRequest {
        this['userUUID'] = userUUID;
        return this;
    }
    public withXType(xType: number): ShowHisMeetingDetailRequest {
        this['X-Type'] = xType;
        return this;
    }
    public set xType(xType: number  | undefined) {
        this['X-Type'] = xType;
    }
    public get xType(): number | undefined {
        return this['X-Type'];
    }
    public withXQueryType(xQueryType: number): ShowHisMeetingDetailRequest {
        this['X-Query-Type'] = xQueryType;
        return this;
    }
    public set xQueryType(xQueryType: number  | undefined) {
        this['X-Query-Type'] = xQueryType;
    }
    public get xQueryType(): number | undefined {
        return this['X-Query-Type'];
    }
    public withXAuthorizationType(xAuthorizationType: string): ShowHisMeetingDetailRequest {
        this['X-Authorization-Type'] = xAuthorizationType;
        return this;
    }
    public set xAuthorizationType(xAuthorizationType: string  | undefined) {
        this['X-Authorization-Type'] = xAuthorizationType;
    }
    public get xAuthorizationType(): string | undefined {
        return this['X-Authorization-Type'];
    }
    public withXSiteId(xSiteId: string): ShowHisMeetingDetailRequest {
        this['X-Site-Id'] = xSiteId;
        return this;
    }
    public set xSiteId(xSiteId: string  | undefined) {
        this['X-Site-Id'] = xSiteId;
    }
    public get xSiteId(): string | undefined {
        return this['X-Site-Id'];
    }
}