import { Ipv6Bandwidth } from './Ipv6Bandwidth';
import { ServerNicSecurityGroup } from './ServerNicSecurityGroup';


export class BatchAddServerNicOption {
    private 'subnet_id'?: string;
    private 'port_id'?: string;
    private 'security_groups'?: Array<ServerNicSecurityGroup>;
    private 'ip_address'?: string;
    private 'ipv6_enable'?: boolean;
    private 'ipv6_bandwidth'?: Ipv6Bandwidth;
    public constructor() { 
    }
    public withSubnetId(subnetId: string): BatchAddServerNicOption {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPortId(portId: string): BatchAddServerNicOption {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withSecurityGroups(securityGroups: Array<ServerNicSecurityGroup>): BatchAddServerNicOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<ServerNicSecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<ServerNicSecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withIpAddress(ipAddress: string): BatchAddServerNicOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withIpv6Enable(ipv6Enable: boolean): BatchAddServerNicOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth): BatchAddServerNicOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth  | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth(): Ipv6Bandwidth | undefined {
        return this['ipv6_bandwidth'];
    }
}