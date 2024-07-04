

export class ListCustomIngressPortDomainsRequest {
    private 'instance_id'?: string;
    private 'ingress_port_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'domain_name'?: string;
    public constructor(instanceId?: string, ingressPortId?: string) { 
        this['instance_id'] = instanceId;
        this['ingress_port_id'] = ingressPortId;
    }
    public withInstanceId(instanceId: string): ListCustomIngressPortDomainsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withIngressPortId(ingressPortId: string): ListCustomIngressPortDomainsRequest {
        this['ingress_port_id'] = ingressPortId;
        return this;
    }
    public set ingressPortId(ingressPortId: string  | undefined) {
        this['ingress_port_id'] = ingressPortId;
    }
    public get ingressPortId(): string | undefined {
        return this['ingress_port_id'];
    }
    public withOffset(offset: number): ListCustomIngressPortDomainsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCustomIngressPortDomainsRequest {
        this['limit'] = limit;
        return this;
    }
    public withDomainName(domainName: string): ListCustomIngressPortDomainsRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
}