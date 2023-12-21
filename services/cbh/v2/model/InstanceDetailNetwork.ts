

export class InstanceDetailNetwork {
    public vip?: string;
    private 'web_port'?: string;
    private 'public_ip'?: string;
    private 'public_id'?: string;
    private 'private_ip'?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'security_group_id'?: string;
    public constructor(webPort?: string, publicIp?: string, publicId?: string, privateIp?: string, vpcId?: string, subnetId?: string, securityGroupId?: string) { 
        this['web_port'] = webPort;
        this['public_ip'] = publicIp;
        this['public_id'] = publicId;
        this['private_ip'] = privateIp;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['security_group_id'] = securityGroupId;
    }
    public withVip(vip: string): InstanceDetailNetwork {
        this['vip'] = vip;
        return this;
    }
    public withWebPort(webPort: string): InstanceDetailNetwork {
        this['web_port'] = webPort;
        return this;
    }
    public set webPort(webPort: string  | undefined) {
        this['web_port'] = webPort;
    }
    public get webPort(): string | undefined {
        return this['web_port'];
    }
    public withPublicIp(publicIp: string): InstanceDetailNetwork {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withPublicId(publicId: string): InstanceDetailNetwork {
        this['public_id'] = publicId;
        return this;
    }
    public set publicId(publicId: string  | undefined) {
        this['public_id'] = publicId;
    }
    public get publicId(): string | undefined {
        return this['public_id'];
    }
    public withPrivateIp(privateIp: string): InstanceDetailNetwork {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withVpcId(vpcId: string): InstanceDetailNetwork {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): InstanceDetailNetwork {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSecurityGroupId(securityGroupId: string): InstanceDetailNetwork {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
}