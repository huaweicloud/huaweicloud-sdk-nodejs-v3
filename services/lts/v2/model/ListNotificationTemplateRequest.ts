import { PreviewTemplateBody } from './PreviewTemplateBody';


export class ListNotificationTemplateRequest {
    private 'domain_id'?: string;
    private 'Content-Type'?: string;
    public body?: PreviewTemplateBody;
    public constructor(domainId?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): ListNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withContentType(contentType: string): ListNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: PreviewTemplateBody): ListNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}