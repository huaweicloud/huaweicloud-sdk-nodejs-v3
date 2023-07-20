

export class SubnetInfo {
    private 'availability_zone'?: string;
    public cidr?: string;
    public name?: string;
    public id?: string;
    private 'gateway_ip'?: string;
    private 'vpc_id'?: string;
    public status?: string;
    public constructor(cidr?: string, name?: string) { 
        this['cidr'] = cidr;
        this['name'] = name;
    }
    public withAvailabilityZone(availabilityZone: string): SubnetInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withCidr(cidr: string): SubnetInfo {
        this['cidr'] = cidr;
        return this;
    }
    public withName(name: string): SubnetInfo {
        this['name'] = name;
        return this;
    }
    public withId(id: string): SubnetInfo {
        this['id'] = id;
        return this;
    }
    public withGatewayIp(gatewayIp: string): SubnetInfo {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withVpcId(vpcId: string): SubnetInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withStatus(status: string): SubnetInfo {
        this['status'] = status;
        return this;
    }
}