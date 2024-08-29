import { UpdateTenantVpcIgwRequestBody } from './UpdateTenantVpcIgwRequestBody';


export class UpdateTenantVpcIgwRequest {
    public fields?: Array<string>;
    private 'vpc_igw_id'?: string;
    public body?: UpdateTenantVpcIgwRequestBody;
    public constructor(vpcIgwId?: string) { 
        this['vpc_igw_id'] = vpcIgwId;
    }
    public withFields(fields: Array<string>): UpdateTenantVpcIgwRequest {
        this['fields'] = fields;
        return this;
    }
    public withVpcIgwId(vpcIgwId: string): UpdateTenantVpcIgwRequest {
        this['vpc_igw_id'] = vpcIgwId;
        return this;
    }
    public set vpcIgwId(vpcIgwId: string  | undefined) {
        this['vpc_igw_id'] = vpcIgwId;
    }
    public get vpcIgwId(): string | undefined {
        return this['vpc_igw_id'];
    }
    public withBody(body: UpdateTenantVpcIgwRequestBody): UpdateTenantVpcIgwRequest {
        this['body'] = body;
        return this;
    }
}