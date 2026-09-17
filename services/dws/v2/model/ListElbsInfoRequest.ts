

export class ListElbsInfoRequest {
    private 'vpc_id'?: string;
    private 'subnet_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withVpcId(vpcId: string): ListElbsInfoRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withSubnetId(subnetId: string): ListElbsInfoRequest {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withLimit(limit: number): ListElbsInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListElbsInfoRequest {
        this['offset'] = offset;
        return this;
    }
}