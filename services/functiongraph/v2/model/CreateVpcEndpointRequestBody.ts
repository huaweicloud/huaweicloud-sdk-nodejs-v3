

export class CreateVpcEndpointRequestBody {
    public flavor?: string;
    public xrole?: string;
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public constructor(vpcId?: string, subnetId?: string) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
    }
    public withFlavor(flavor: string): CreateVpcEndpointRequestBody {
        this['flavor'] = flavor;
        return this;
    }
    public withXrole(xrole: string): CreateVpcEndpointRequestBody {
        this['xrole'] = xrole;
        return this;
    }
    public withVpcId(vpcId: string): CreateVpcEndpointRequestBody {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): CreateVpcEndpointRequestBody {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
}