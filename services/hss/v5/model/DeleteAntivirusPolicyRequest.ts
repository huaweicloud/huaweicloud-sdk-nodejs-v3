import { DeleteAntivirusPolicyRequestInfo } from './DeleteAntivirusPolicyRequestInfo';


export class DeleteAntivirusPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: DeleteAntivirusPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): DeleteAntivirusPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: DeleteAntivirusPolicyRequestInfo): DeleteAntivirusPolicyRequest {
        this['body'] = body;
        return this;
    }
}