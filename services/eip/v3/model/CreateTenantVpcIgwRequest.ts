import { CreateTenantVpcIgwRequestBody } from './CreateTenantVpcIgwRequestBody';


export class CreateTenantVpcIgwRequest {
    public fields?: Array<string>;
    public body?: CreateTenantVpcIgwRequestBody;
    public constructor() { 
    }
    public withFields(fields: Array<string>): CreateTenantVpcIgwRequest {
        this['fields'] = fields;
        return this;
    }
    public withBody(body: CreateTenantVpcIgwRequestBody): CreateTenantVpcIgwRequest {
        this['body'] = body;
        return this;
    }
}