

export class CreateFloatingIpOption {
    private 'floating_ip_address'?: string;
    private 'floating_network_id'?: string;
    private 'port_id'?: string;
    private 'fixed_ip_address'?: string;
    public constructor(floatingNetworkId?: string) { 
        this['floating_network_id'] = floatingNetworkId;
    }
    public withFloatingIpAddress(floatingIpAddress: string): CreateFloatingIpOption {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withFloatingNetworkId(floatingNetworkId: string): CreateFloatingIpOption {
        this['floating_network_id'] = floatingNetworkId;
        return this;
    }
    public set floatingNetworkId(floatingNetworkId: string  | undefined) {
        this['floating_network_id'] = floatingNetworkId;
    }
    public get floatingNetworkId(): string | undefined {
        return this['floating_network_id'];
    }
    public withPortId(portId: string): CreateFloatingIpOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withFixedIpAddress(fixedIpAddress: string): CreateFloatingIpOption {
        this['fixed_ip_address'] = fixedIpAddress;
        return this;
    }
    public set fixedIpAddress(fixedIpAddress: string  | undefined) {
        this['fixed_ip_address'] = fixedIpAddress;
    }
    public get fixedIpAddress(): string | undefined {
        return this['fixed_ip_address'];
    }
}