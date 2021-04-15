import { Ipv6Bandwidth } from './Ipv6Bandwidth';
import { ServerNicSecurityGroup } from './ServerNicSecurityGroup';


export class BatchAddServerNicOption {
    private 'subnet_id': string | undefined;
    private 'security_groups'?: Array<ServerNicSecurityGroup> | undefined;
    private 'ip_address'?: string | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'ipv6_bandwidth'?: Ipv6Bandwidth | undefined;
    public constructor(subnetId?: any) { 
        this['subnet_id'] = subnetId;
    }
    public withSubnetId(subnetId: string): BatchAddServerNicOption {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroups(securityGroups: Array<ServerNicSecurityGroup>): BatchAddServerNicOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<ServerNicSecurityGroup> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withIpAddress(ipAddress: string): BatchAddServerNicOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withIpv6Enable(ipv6Enable: boolean): BatchAddServerNicOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withIpv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth): BatchAddServerNicOption {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
        return this;
    }
    public set ipv6Bandwidth(ipv6Bandwidth: Ipv6Bandwidth | undefined) {
        this['ipv6_bandwidth'] = ipv6Bandwidth;
    }
    public get ipv6Bandwidth() {
        return this['ipv6_bandwidth'];
    }
}