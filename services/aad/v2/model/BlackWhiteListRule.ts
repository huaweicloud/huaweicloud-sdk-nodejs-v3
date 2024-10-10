

export class BlackWhiteListRule {
    public id?: string;
    public type?: number;
    public ip?: string;
    private 'domain_id'?: string;
    public constructor() { 
    }
    public withId(id: string): BlackWhiteListRule {
        this['id'] = id;
        return this;
    }
    public withType(type: number): BlackWhiteListRule {
        this['type'] = type;
        return this;
    }
    public withIp(ip: string): BlackWhiteListRule {
        this['ip'] = ip;
        return this;
    }
    public withDomainId(domainId: string): BlackWhiteListRule {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
}