

export class ShowDomainNameConfigRequest {
    private 'domain_id'?: string;
    public type?: ShowDomainNameConfigRequestTypeEnum | string;
    public constructor(domainId?: string, type?: string) { 
        this['domain_id'] = domainId;
        this['type'] = type;
    }
    public withDomainId(domainId: string): ShowDomainNameConfigRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withType(type: ShowDomainNameConfigRequestTypeEnum | string): ShowDomainNameConfigRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowDomainNameConfigRequestTypeEnum {
    DOMAIN = 'DOMAIN',
    WAF = 'WAF'
}
