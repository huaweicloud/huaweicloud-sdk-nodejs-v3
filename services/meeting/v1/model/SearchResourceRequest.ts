

export class SearchResourceRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    private 'corp_id'?: string;
    public startExpireDate?: number;
    public endExpireDate?: number;
    public type?: string;
    public typeId?: string;
    public status?: number;
    public constructor(corpId?: string) { 
        this['corp_id'] = corpId;
    }
    public withXRequestId(xRequestId: string): SearchResourceRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchResourceRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchResourceRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchResourceRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchResourceRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withCorpId(corpId: string): SearchResourceRequest {
        this['corp_id'] = corpId;
        return this;
    }
    public set corpId(corpId: string  | undefined) {
        this['corp_id'] = corpId;
    }
    public get corpId(): string | undefined {
        return this['corp_id'];
    }
    public withStartExpireDate(startExpireDate: number): SearchResourceRequest {
        this['startExpireDate'] = startExpireDate;
        return this;
    }
    public withEndExpireDate(endExpireDate: number): SearchResourceRequest {
        this['endExpireDate'] = endExpireDate;
        return this;
    }
    public withType(type: string): SearchResourceRequest {
        this['type'] = type;
        return this;
    }
    public withTypeId(typeId: string): SearchResourceRequest {
        this['typeId'] = typeId;
        return this;
    }
    public withStatus(status: number): SearchResourceRequest {
        this['status'] = status;
        return this;
    }
}