import { Nics } from './Nics';
import { PublicIp } from './PublicIp';
import { SecurityGroup } from './SecurityGroup';


export class CBHInstances {
    private 'flavor_ref'?: string;
    private 'instance_name'?: string;
    private 'vpc_id'?: string;
    public nics?: Array<Nics>;
    private 'public_ip'?: PublicIp;
    private 'security_groups'?: Array<SecurityGroup>;
    private 'availability_zone'?: string;
    private 'slave_availability_zone'?: string;
    public comment?: string;
    public region?: string;
    private 'hx_password'?: string;
    private 'bastion_type'?: string;
    private 'ipv6_enable'?: boolean;
    private 'enterprise_project_id'?: string;
    public constructor(flavorRef?: string, instanceName?: string, vpcId?: string, nics?: Array<Nics>, publicIp?: PublicIp, securityGroups?: Array<SecurityGroup>, availabilityZone?: string, region?: string, hxPassword?: string, bastionType?: string) { 
        this['flavor_ref'] = flavorRef;
        this['instance_name'] = instanceName;
        this['vpc_id'] = vpcId;
        this['nics'] = nics;
        this['public_ip'] = publicIp;
        this['security_groups'] = securityGroups;
        this['availability_zone'] = availabilityZone;
        this['region'] = region;
        this['hx_password'] = hxPassword;
        this['bastion_type'] = bastionType;
    }
    public withFlavorRef(flavorRef: string): CBHInstances {
        this['flavor_ref'] = flavorRef;
        return this;
    }
    public set flavorRef(flavorRef: string  | undefined) {
        this['flavor_ref'] = flavorRef;
    }
    public get flavorRef(): string | undefined {
        return this['flavor_ref'];
    }
    public withInstanceName(instanceName: string): CBHInstances {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withVpcId(vpcId: string): CBHInstances {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withNics(nics: Array<Nics>): CBHInstances {
        this['nics'] = nics;
        return this;
    }
    public withPublicIp(publicIp: PublicIp): CBHInstances {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: PublicIp  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): PublicIp | undefined {
        return this['public_ip'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): CBHInstances {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
    public withAvailabilityZone(availabilityZone: string): CBHInstances {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSlaveAvailabilityZone(slaveAvailabilityZone: string): CBHInstances {
        this['slave_availability_zone'] = slaveAvailabilityZone;
        return this;
    }
    public set slaveAvailabilityZone(slaveAvailabilityZone: string  | undefined) {
        this['slave_availability_zone'] = slaveAvailabilityZone;
    }
    public get slaveAvailabilityZone(): string | undefined {
        return this['slave_availability_zone'];
    }
    public withComment(comment: string): CBHInstances {
        this['comment'] = comment;
        return this;
    }
    public withRegion(region: string): CBHInstances {
        this['region'] = region;
        return this;
    }
    public withHxPassword(hxPassword: string): CBHInstances {
        this['hx_password'] = hxPassword;
        return this;
    }
    public set hxPassword(hxPassword: string  | undefined) {
        this['hx_password'] = hxPassword;
    }
    public get hxPassword(): string | undefined {
        return this['hx_password'];
    }
    public withBastionType(bastionType: string): CBHInstances {
        this['bastion_type'] = bastionType;
        return this;
    }
    public set bastionType(bastionType: string  | undefined) {
        this['bastion_type'] = bastionType;
    }
    public get bastionType(): string | undefined {
        return this['bastion_type'];
    }
    public withIpv6Enable(ipv6Enable: boolean): CBHInstances {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CBHInstances {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}