

export class EipNode {
    public id?: string;
    private 'ip_address'?: string;
    private 'ip_version'?: number;
    public constructor(id?: string, ipAddress?: string, ipVersion?: number) { 
        this['id'] = id;
        this['ip_address'] = ipAddress;
        this['ip_version'] = ipVersion;
    }
    public withId(id: string): EipNode {
        this['id'] = id;
        return this;
    }
    public withIpAddress(ipAddress: string): EipNode {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIpVersion(ipVersion: number): EipNode {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
}