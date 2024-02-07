import { CreateTenantVpcIgwRequestBody } from './CreateTenantVpcIgwRequestBody';


export class CreateTenantVpcIgwRequest {
    public fields?: string;
    public body?: CreateTenantVpcIgwRequestBody;
    public constructor() { 
    }
    public withFields(fields: string): CreateTenantVpcIgwRequest {
        this['fields'] = fields;
        return this;
    }
    public withBody(body: CreateTenantVpcIgwRequestBody): CreateTenantVpcIgwRequest {
        this['body'] = body;
        return this;
    }
}