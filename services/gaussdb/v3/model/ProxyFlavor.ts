

export class ProxyFlavor {
    public id?: string;
    private 'spec_code'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'db_type'?: string;
    private 'az_status'?: object;
    private 'supported_ipv6'?: boolean;
    public constructor() { 
    }
    public withId(id: string): ProxyFlavor {
        this['id'] = id;
        return this;
    }
    public withSpecCode(specCode: string): ProxyFlavor {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withVcpus(vcpus: string): ProxyFlavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ProxyFlavor {
        this['ram'] = ram;
        return this;
    }
    public withDbType(dbType: string): ProxyFlavor {
        this['db_type'] = dbType;
        return this;
    }
    public set dbType(dbType: string  | undefined) {
        this['db_type'] = dbType;
    }
    public get dbType(): string | undefined {
        return this['db_type'];
    }
    public withAzStatus(azStatus: object): ProxyFlavor {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: object  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): object | undefined {
        return this['az_status'];
    }
    public withSupportedIpv6(supportedIpv6: boolean): ProxyFlavor {
        this['supported_ipv6'] = supportedIpv6;
        return this;
    }
    public set supportedIpv6(supportedIpv6: boolean  | undefined) {
        this['supported_ipv6'] = supportedIpv6;
    }
    public get supportedIpv6(): boolean | undefined {
        return this['supported_ipv6'];
    }
}