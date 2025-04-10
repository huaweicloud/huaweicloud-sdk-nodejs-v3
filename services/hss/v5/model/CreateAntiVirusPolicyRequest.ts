import { CreateAntiVirusPolicyRequestBody } from './CreateAntiVirusPolicyRequestBody';


export class CreateAntiVirusPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: CreateAntiVirusPolicyRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateAntiVirusPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: CreateAntiVirusPolicyRequestBody): CreateAntiVirusPolicyRequest {
        this['body'] = body;
        return this;
    }
}