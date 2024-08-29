

export class ShowInternalVpcIgwRequest {
    public fields?: Array<string>;
    private 'vpc_igw_id'?: string;
    public constructor(vpcIgwId?: string) { 
        this['vpc_igw_id'] = vpcIgwId;
    }
    public withFields(fields: Array<string>): ShowInternalVpcIgwRequest {
        this['fields'] = fields;
        return this;
    }
    public withVpcIgwId(vpcIgwId: string): ShowInternalVpcIgwRequest {
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