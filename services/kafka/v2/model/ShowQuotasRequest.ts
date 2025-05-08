

export class ShowQuotasRequest {
    public includeTagsQuota?: string;
    public constructor() { 
    }
    public withIncludeTagsQuota(includeTagsQuota: string): ShowQuotasRequest {
        this['includeTagsQuota'] = includeTagsQuota;
        return this;
    }
}