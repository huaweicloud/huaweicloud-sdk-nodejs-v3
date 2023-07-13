import { PublicIp } from './PublicIp';


export class Restore {
    public name: string;
    private 'subnet_id'?: string | undefined;
    private 'security_group_id'?: string | undefined;
    private 'vpc_id'?: string | undefined;
    private 'availability_zone'?: string | undefined;
    public port?: number;
    private 'public_ip'?: PublicIp | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): Restore {
        this['name'] = name;
        return this;
    }
    public withSubnetId(subnetId: string): Restore {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): Restore {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId() {
        return this['security_group_id'];
    }
    public withVpcId(vpcId: string): Restore {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withAvailabilityZone(availabilityZone: string): Restore {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withPort(port: number): Restore {
        this['port'] = port;
        return this;
    }
    public withPublicIp(publicIp: PublicIp): Restore {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp() {
        return this['public_ip'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Restore {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}