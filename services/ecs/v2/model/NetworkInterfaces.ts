import { Association } from './Association';


export class NetworkInterfaces {
    private 'port_id'?: string;
    public primary?: boolean;
    private 'ip_addresses'?: Array<string>;
    private 'ipv6_addresses'?: Array<string>;
    private 'subnet_id'?: string;
    public association?: Association;
    public constructor() { 
    }
    public withPortId(portId: string): NetworkInterfaces {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPrimary(primary: boolean): NetworkInterfaces {
        this['primary'] = primary;
        return this;
    }
    public withIpAddresses(ipAddresses: Array<string>): NetworkInterfaces {
        this['ip_addresses'] = ipAddresses;
        return this;
    }
    public set ipAddresses(ipAddresses: Array<string>  | undefined) {
        this['ip_addresses'] = ipAddresses;
    }
    public get ipAddresses(): Array<string> | undefined {
        return this['ip_addresses'];
    }
    public withIpv6Addresses(ipv6Addresses: Array<string>): NetworkInterfaces {
        this['ipv6_addresses'] = ipv6Addresses;
        return this;
    }
    public set ipv6Addresses(ipv6Addresses: Array<string>  | undefined) {
        this['ipv6_addresses'] = ipv6Addresses;
    }
    public get ipv6Addresses(): Array<string> | undefined {
        return this['ipv6_addresses'];
    }
    public withSubnetId(subnetId: string): NetworkInterfaces {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAssociation(association: Association): NetworkInterfaces {
        this['association'] = association;
        return this;
    }
}