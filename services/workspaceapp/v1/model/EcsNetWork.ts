import { ServerAddress } from './ServerAddress';


export class EcsNetWork {
    public addr?: string;
    public version?: number;
    private 'OS-EXT-IPS-MAC:mac_addr'?: string;
    private 'OS-EXT-IPS:type'?: string;
    private 'OS-EXT-IPS:port_id'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'tenant_type'?: string;
    public constructor() { 
    }
    public withAddr(addr: string): EcsNetWork {
        this['addr'] = addr;
        return this;
    }
    public withVersion(version: number): EcsNetWork {
        this['version'] = version;
        return this;
    }
    public withOSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string): EcsNetWork {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
        return this;
    }
    public set oSEXTIPSMACMacAddr(oSEXTIPSMACMacAddr: string  | undefined) {
        this['OS-EXT-IPS-MAC:mac_addr'] = oSEXTIPSMACMacAddr;
    }
    public get oSEXTIPSMACMacAddr(): string | undefined {
        return this['OS-EXT-IPS-MAC:mac_addr'];
    }
    public withOSEXTIPSType(oSEXTIPSType: string): EcsNetWork {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
        return this;
    }
    public set oSEXTIPSType(oSEXTIPSType: string  | undefined) {
        this['OS-EXT-IPS:type'] = oSEXTIPSType;
    }
    public get oSEXTIPSType(): string | undefined {
        return this['OS-EXT-IPS:type'];
    }
    public withOSEXTIPSPortId(oSEXTIPSPortId: string): EcsNetWork {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
        return this;
    }
    public set oSEXTIPSPortId(oSEXTIPSPortId: string  | undefined) {
        this['OS-EXT-IPS:port_id'] = oSEXTIPSPortId;
    }
    public get oSEXTIPSPortId(): string | undefined {
        return this['OS-EXT-IPS:port_id'];
    }
    public withVpcId(vpcId: string): EcsNetWork {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): EcsNetWork {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTenantType(tenantType: string): EcsNetWork {
        this['tenant_type'] = tenantType;
        return this;
    }
    public set tenantType(tenantType: string  | undefined) {
        this['tenant_type'] = tenantType;
    }
    public get tenantType(): string | undefined {
        return this['tenant_type'];
    }
}