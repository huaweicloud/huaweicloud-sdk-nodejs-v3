

export class DeleteVpcEndpointRequest {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    private 'Content-Type'?: string;
    public constructor(vpcId?: string, subnetId?: string, contentType?: string) { 
        this['vpc_id'] = vpcId;
        this['subnet_id'] = subnetId;
        this['Content-Type'] = contentType;
    }
    public withVpcId(vpcId: string): DeleteVpcEndpointRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): DeleteVpcEndpointRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withContentType(contentType: string): DeleteVpcEndpointRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}