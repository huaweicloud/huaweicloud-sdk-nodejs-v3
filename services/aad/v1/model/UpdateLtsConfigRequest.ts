import { UpdateLtsConfigRequestBody } from './UpdateLtsConfigRequestBody';


export class UpdateLtsConfigRequest {
    private 'enterprise_project_id'?: string;
    public body?: UpdateLtsConfigRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateLtsConfigRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: UpdateLtsConfigRequestBody): UpdateLtsConfigRequest {
        this['body'] = body;
        return this;
    }
}