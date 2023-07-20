

export class SearchCorpResourcesRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    public startExpireDate?: number;
    public endExpireDate?: number;
    public type?: string;
    public vmrMode?: number;
    public typeId?: string;
    public orderId?: string;
    public status?: number;
    public constructor() { 
    }
    public withXRequestId(xRequestId: string): SearchCorpResourcesRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchCorpResourcesRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchCorpResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchCorpResourcesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchCorpResourcesRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withStartExpireDate(startExpireDate: number): SearchCorpResourcesRequest {
        this['startExpireDate'] = startExpireDate;
        return this;
    }
    public withEndExpireDate(endExpireDate: number): SearchCorpResourcesRequest {
        this['endExpireDate'] = endExpireDate;
        return this;
    }
    public withType(type: string): SearchCorpResourcesRequest {
        this['type'] = type;
        return this;
    }
    public withVmrMode(vmrMode: number): SearchCorpResourcesRequest {
        this['vmrMode'] = vmrMode;
        return this;
    }
    public withTypeId(typeId: string): SearchCorpResourcesRequest {
        this['typeId'] = typeId;
        return this;
    }
    public withOrderId(orderId: string): SearchCorpResourcesRequest {
        this['orderId'] = orderId;
        return this;
    }
    public withStatus(status: number): SearchCorpResourcesRequest {
        this['status'] = status;
        return this;
    }
}