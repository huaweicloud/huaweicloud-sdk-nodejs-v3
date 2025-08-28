import { UpdateRegistryRequestBody } from './UpdateRegistryRequestBody';


export class UpdateRegistryRequest {
    private 'enterprise_project_id'?: string;
    public id?: string;
    public body?: UpdateRegistryRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateRegistryRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): UpdateRegistryRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateRegistryRequestBody): UpdateRegistryRequest {
        this['body'] = body;
        return this;
    }
}