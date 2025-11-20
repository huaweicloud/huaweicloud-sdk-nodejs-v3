import { UpdateDomainConfigRequestBody } from './UpdateDomainConfigRequestBody';


export class UpdateDomainConfigRequest {
    private 'domain_id'?: string;
    public body?: UpdateDomainConfigRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainConfigRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: UpdateDomainConfigRequestBody): UpdateDomainConfigRequest {
        this['body'] = body;
        return this;
    }
}