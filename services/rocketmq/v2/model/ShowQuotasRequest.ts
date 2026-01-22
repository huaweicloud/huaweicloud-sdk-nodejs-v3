

export class ShowQuotasRequest {
    public includeTagsQuota?: string;
    public onlyQuota?: string;
    public constructor() { 
    }
    public withIncludeTagsQuota(includeTagsQuota: string): ShowQuotasRequest {
        this['includeTagsQuota'] = includeTagsQuota;
        return this;
    }
    public withOnlyQuota(onlyQuota: string): ShowQuotasRequest {
        this['onlyQuota'] = onlyQuota;
        return this;
    }
}