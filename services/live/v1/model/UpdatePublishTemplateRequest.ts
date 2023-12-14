import { CallbackUrl } from './CallbackUrl';


export class UpdatePublishTemplateRequest {
    public domain?: string;
    public body?: CallbackUrl;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): UpdatePublishTemplateRequest {
        this['domain'] = domain;
        return this;
    }
    public withBody(body: CallbackUrl): UpdatePublishTemplateRequest {
        this['body'] = body;
        return this;
    }
}