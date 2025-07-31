import { RecordUserViewVulTaskRequestInfo } from './RecordUserViewVulTaskRequestInfo';


export class RecordUserViewVulTaskRequest {
    private 'enterprise_project_id'?: string;
    public body?: RecordUserViewVulTaskRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecordUserViewVulTaskRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: RecordUserViewVulTaskRequestInfo): RecordUserViewVulTaskRequest {
        this['body'] = body;
        return this;
    }
}