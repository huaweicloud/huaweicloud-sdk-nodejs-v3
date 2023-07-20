

export class ListNotificationTemplatesRequest {
    private 'domain_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'Content-Type'?: string;
    public constructor(domainId?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListNotificationTemplatesRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
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
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}