import { CreateNotificationTemplateRequestBody } from './CreateNotificationTemplateRequestBody';


export class CreateNotificationTemplateRequest {
    private 'domain_id'?: string;
    private 'Content-Type'?: string;
    public body?: CreateNotificationTemplateRequestBody;
    public constructor(domainId?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): CreateNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withContentType(contentType: string): CreateNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateNotificationTemplateRequestBody): CreateNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}