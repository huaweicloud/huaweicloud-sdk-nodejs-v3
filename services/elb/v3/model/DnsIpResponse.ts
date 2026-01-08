

export class DnsIpResponse {
    public id?: string;
    public enable?: boolean;
    private 'ip_address'?: string;
    public type?: string;
    private 'domain_name'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): DnsIpResponse {
        this['id'] = id;
        return this;
    }
    public withEnable(enable: boolean): DnsIpResponse {
        this['enable'] = enable;
        return this;
    }
    public withIpAddress(ipAddress: string): DnsIpResponse {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withType(type: string): DnsIpResponse {
        this['type'] = type;
        return this;
    }
    public withDomainName(domainName: string): DnsIpResponse {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withCreatedAt(createdAt: string): DnsIpResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): DnsIpResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}