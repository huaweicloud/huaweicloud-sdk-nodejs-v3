

export class DomainIpv6SwitchReq {
    public domain?: string;
    private 'is_ipv6'?: boolean;
    public constructor(domain?: string) { 
        this['domain'] = domain;
    }
    public withDomain(domain: string): DomainIpv6SwitchReq {
        this['domain'] = domain;
        return this;
    }
    public withIsIpv6(isIpv6: boolean): DomainIpv6SwitchReq {
        this['is_ipv6'] = isIpv6;
        return this;
    }
    public set isIpv6(isIpv6: boolean  | undefined) {
        this['is_ipv6'] = isIpv6;
    }
    public get isIpv6(): boolean | undefined {
        return this['is_ipv6'];
    }
}