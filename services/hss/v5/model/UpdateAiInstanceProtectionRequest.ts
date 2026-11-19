import { UpdateAiInstanceProtectionRequestBody } from './UpdateAiInstanceProtectionRequestBody';


export class UpdateAiInstanceProtectionRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateAiInstanceProtectionRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAiInstanceProtectionRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateAiInstanceProtectionRequestBody): UpdateAiInstanceProtectionRequest {
        this['body'] = body;
        return this;
    }
}