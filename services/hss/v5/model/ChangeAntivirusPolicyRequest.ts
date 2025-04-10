import { ChangeAntivirusPolicyRequestInfo } from './ChangeAntivirusPolicyRequestInfo';


export class ChangeAntivirusPolicyRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAntivirusPolicyRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeAntivirusPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAntivirusPolicyRequestInfo): ChangeAntivirusPolicyRequest {
        this['body'] = body;
        return this;
    }
}