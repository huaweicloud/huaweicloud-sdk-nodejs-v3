

export class HwcEcsAddress {
    public version?: string;
    public addr?: string;
    public type?: string;
    private 'mac_addr'?: string;
    private 'port_id'?: string;
    private 'vpc_id'?: string;
    public constructor(version?: string, addr?: string, type?: string, macAddr?: string, portId?: string, vpcId?: string) { 
        this['version'] = version;
        this['addr'] = addr;
        this['type'] = type;
        this['mac_addr'] = macAddr;
        this['port_id'] = portId;
        this['vpc_id'] = vpcId;
    }
    public withVersion(version: string): HwcEcsAddress {
        this['version'] = version;
        return this;
    }
    public withAddr(addr: string): HwcEcsAddress {
        this['addr'] = addr;
        return this;
    }
    public withType(type: string): HwcEcsAddress {
        this['type'] = type;
        return this;
    }
    public withMacAddr(macAddr: string): HwcEcsAddress {
        this['mac_addr'] = macAddr;
        return this;
    }
    public set macAddr(macAddr: string  | undefined) {
        this['mac_addr'] = macAddr;
    }
    public get macAddr(): string | undefined {
        return this['mac_addr'];
    }
    public withPortId(portId: string): HwcEcsAddress {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withVpcId(vpcId: string): HwcEcsAddress {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}