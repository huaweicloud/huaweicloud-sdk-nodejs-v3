

export class EndpointCreateReq {
    public name?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public description?: string;
    public constructor(name?: string, vpcId?: string, subnetId?: string) { 
        this['name'] = name;
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withName(name: string): EndpointCreateReq {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): EndpointCreateReq {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): EndpointCreateReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withDescription(description: string): EndpointCreateReq {
        this['description'] = description;
        return this;
    }
}