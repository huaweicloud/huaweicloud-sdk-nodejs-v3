

export class ComputeFlavorItemDetail {
    public id?: string;
    private 'spec_code'?: string;
    private 'iaas_code'?: string;
    public vcpus?: string;
    public ram?: string;
    private 'supported_ipv6'?: boolean;
    private 'az_status'?: { [key: string]: string; };
    public constructor() { 
    }
    public withId(id: string): ComputeFlavorItemDetail {
        this['id'] = id;
        return this;
    }
    public withSpecCode(specCode: string): ComputeFlavorItemDetail {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withIaasCode(iaasCode: string): ComputeFlavorItemDetail {
        this['iaas_code'] = iaasCode;
        return this;
    }
    public set iaasCode(iaasCode: string  | undefined) {
        this['iaas_code'] = iaasCode;
    }
    public get iaasCode(): string | undefined {
        return this['iaas_code'];
    }
    public withVcpus(vcpus: string): ComputeFlavorItemDetail {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): ComputeFlavorItemDetail {
        this['ram'] = ram;
        return this;
    }
    public withSupportedIpv6(supportedIpv6: boolean): ComputeFlavorItemDetail {
        this['supported_ipv6'] = supportedIpv6;
        return this;
    }
    public set supportedIpv6(supportedIpv6: boolean  | undefined) {
        this['supported_ipv6'] = supportedIpv6;
    }
    public get supportedIpv6(): boolean | undefined {
        return this['supported_ipv6'];
    }
    public withAzStatus(azStatus: { [key: string]: string; }): ComputeFlavorItemDetail {
        this['az_status'] = azStatus;
        return this;
    }
    public set azStatus(azStatus: { [key: string]: string; }  | undefined) {
        this['az_status'] = azStatus;
    }
    public get azStatus(): { [key: string]: string; } | undefined {
        return this['az_status'];
    }
}