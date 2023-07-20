import { DeleteNotificationTemplateBody } from './DeleteNotificationTemplateBody';


export class DeleteNotificationTemplateRequest {
    private 'domain_id'?: string;
    private 'Content-Type'?: string;
    public body?: DeleteNotificationTemplateBody;
    public constructor(domainId?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): DeleteNotificationTemplateRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withContentType(contentType: string): DeleteNotificationTemplateRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeleteNotificationTemplateBody): DeleteNotificationTemplateRequest {
        this['body'] = body;
        return this;
    }
}