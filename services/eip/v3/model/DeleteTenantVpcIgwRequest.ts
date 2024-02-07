

export class DeleteTenantVpcIgwRequest {
    private 'vpc_igw_id'?: string;
    public constructor(vpcIgwId?: string) { 
        this['vpc_igw_id'] = vpcIgwId;
    }
    public withVpcIgwId(vpcIgwId: string): DeleteTenantVpcIgwRequest {
        this['vpc_igw_id'] = vpcIgwId;
        return this;
    }
    public set vpcIgwId(vpcIgwId: string  | undefined) {
        this['vpc_igw_id'] = vpcIgwId;
    }
    public get vpcIgwId(): string | undefined {
        return this['vpc_igw_id'];
    }
}