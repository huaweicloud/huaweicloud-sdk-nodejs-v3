import { KeyChainInfo } from './KeyChainInfo';


export class UpdateDomainKeyChainRequest {
    public domain: string;
    public body?: KeyChainInfo;
    public constructor(domain?: any) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): UpdateDomainKeyChainRequest {
        this['domain'] = domain;
        return this;
    }
    public withBody(body: KeyChainInfo): UpdateDomainKeyChainRequest {
        this['body'] = body;
        return this;
    }
}