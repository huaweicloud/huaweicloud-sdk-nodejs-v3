

export class ListNotificationTemplatesRequest {
    private 'domain_id': string | undefined;
    public offset?: number;
    public limit?: number;
    private 'Content-Type': string | undefined;
    public constructor(domainId?: any, contentType?: any) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListNotificationTemplatesRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withOffset(offset: number): ListNotificationTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
    public withContentType(contentType: string): ListNotificationTemplatesRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}