import { SecurityGroup } from './SecurityGroup';


export class NetworkInfoCreate {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'public_ip'?: object;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'private_ip'?: object;
    public constructor(vpcId?: string, subnetId?: string, publicIp?: object, securityGroups?: Array<SecurityGroup>) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['public_ip'] = publicIp;
        this['security_groups'] = securityGroups;
    }
    public withVpcId(vpcId: string): NetworkInfoCreate {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): NetworkInfoCreate {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withPublicIp(publicIp: object): NetworkInfoCreate {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: object  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): object | undefined {
        return this['public_ip'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): NetworkInfoCreate {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withPrivateIp(privateIp: object): NetworkInfoCreate {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: object  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): object | undefined {
        return this['private_ip'];
    }
}