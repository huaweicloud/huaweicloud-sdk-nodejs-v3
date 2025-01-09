

export class Connections {
    public id?: string;
    public status?: string;
    public maxSession?: string;
    public specificationName?: string;
    private 'created_at'?: string;
    private 'update_at'?: string;
    private 'domain_id'?: string;
    public vpcepIp?: string;
    public vpcepIpv6Address?: string;
    public vpcepDnsName?: string;
    public constructor() { 
    }
    public withId(id: string): Connections {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): Connections {
        this['status'] = status;
        return this;
    }
    public withMaxSession(maxSession: string): Connections {
        this['maxSession'] = maxSession;
        return this;
    }
    public withSpecificationName(specificationName: string): Connections {
        this['specificationName'] = specificationName;
        return this;
    }
    public withCreatedAt(createdAt: string): Connections {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdateAt(updateAt: string): Connections {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: string  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): string | undefined {
        return this['update_at'];
    }
    public withDomainId(domainId: string): Connections {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withVpcepIp(vpcepIp: string): Connections {
        this['vpcepIp'] = vpcepIp;
        return this;
    }
    public withVpcepIpv6Address(vpcepIpv6Address: string): Connections {
        this['vpcepIpv6Address'] = vpcepIpv6Address;
        return this;
    }
    public withVpcepDnsName(vpcepDnsName: string): Connections {
        this['vpcepDnsName'] = vpcepDnsName;
        return this;
    }
}