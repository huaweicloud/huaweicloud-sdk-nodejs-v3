import { ChangeVpcSecurityGroups } from './ChangeVpcSecurityGroups';


export class ChangeVpcNicBody {
    private 'port_id'?: string;
    private 'subnet_id'?: string;
    private 'security_groups'?: ChangeVpcSecurityGroups;
    private 'ip_address'?: string;
    public constructor() { 
    }
    public withPortId(portId: string): ChangeVpcNicBody {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withSubnetId(subnetId: string): ChangeVpcNicBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroups(securityGroups: ChangeVpcSecurityGroups): ChangeVpcNicBody {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: ChangeVpcSecurityGroups  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): ChangeVpcSecurityGroups | undefined {
        return this['security_groups'];
    }
    public withIpAddress(ipAddress: string): ChangeVpcNicBody {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}