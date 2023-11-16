import { DomainRealServerInfo } from './DomainRealServerInfo';


export class UpdateDomainRequest {
    private 'domain_id'?: string;
    public body?: DomainRealServerInfo;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): UpdateDomainRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: DomainRealServerInfo): UpdateDomainRequest {
        this['body'] = body;
        return this;
    }
}