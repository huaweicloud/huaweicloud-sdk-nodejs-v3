import { AddRegistryRequestBody } from './AddRegistryRequestBody';


export class AddRegistryRequest {
    private 'enterprise_project_id'?: string;
    public body?: AddRegistryRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AddRegistryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: AddRegistryRequestBody): AddRegistryRequest {
        this['body'] = body;
        return this;
    }
}