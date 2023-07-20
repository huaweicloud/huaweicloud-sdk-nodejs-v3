

export class SearchResourceOpRecordRequest {
    private 'X-Request-Id'?: string;
    private 'Accept-Language'?: string;
    public offset?: number;
    public limit?: number;
    public searchKey?: string;
    private 'corp_id'?: string;
    public startExpireDate?: number;
    public endExpireDate?: number;
    public startOperateDate?: number;
    public endOperateDate?: number;
    public type?: string;
    public typeId?: string;
    public operateType?: number;
    public constructor(corpId?: string) { 
        this['corp_id'] = corpId;
    }
    public withXRequestId(xRequestId: string): SearchResourceOpRecordRequest {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
    public withAcceptLanguage(acceptLanguage: string): SearchResourceOpRecordRequest {
        this['Accept-Language'] = acceptLanguage;
        return this;
    }
    public set acceptLanguage(acceptLanguage: string  | undefined) {
        this['Accept-Language'] = acceptLanguage;
    }
    public get acceptLanguage(): string | undefined {
        return this['Accept-Language'];
    }
    public withOffset(offset: number): SearchResourceOpRecordRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): SearchResourceOpRecordRequest {
        this['limit'] = limit;
        return this;
    }
    public withSearchKey(searchKey: string): SearchResourceOpRecordRequest {
        this['searchKey'] = searchKey;
        return this;
    }
    public withCorpId(corpId: string): SearchResourceOpRecordRequest {
        this['corp_id'] = corpId;
        return this;
    }
    public set corpId(corpId: string  | undefined) {
        this['corp_id'] = corpId;
    }
    public get corpId(): string | undefined {
        return this['corp_id'];
    }
    public withStartExpireDate(startExpireDate: number): SearchResourceOpRecordRequest {
        this['startExpireDate'] = startExpireDate;
        return this;
    }
    public withEndExpireDate(endExpireDate: number): SearchResourceOpRecordRequest {
        this['endExpireDate'] = endExpireDate;
        return this;
    }
    public withStartOperateDate(startOperateDate: number): SearchResourceOpRecordRequest {
        this['startOperateDate'] = startOperateDate;
        return this;
    }
    public withEndOperateDate(endOperateDate: number): SearchResourceOpRecordRequest {
        this['endOperateDate'] = endOperateDate;
        return this;
    }
    public withType(type: string): SearchResourceOpRecordRequest {
        this['type'] = type;
        return this;
    }
    public withTypeId(typeId: string): SearchResourceOpRecordRequest {
        this['typeId'] = typeId;
        return this;
    }
    public withOperateType(operateType: number): SearchResourceOpRecordRequest {
        this['operateType'] = operateType;
        return this;
    }
}