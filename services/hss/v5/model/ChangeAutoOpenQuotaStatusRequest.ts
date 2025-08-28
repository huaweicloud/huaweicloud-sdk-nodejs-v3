import { ChangeAutoOpenQuotaStatusRequestInfo } from './ChangeAutoOpenQuotaStatusRequestInfo';


export class ChangeAutoOpenQuotaStatusRequest {
    private 'enterprise_project_id'?: string;
    public body?: ChangeAutoOpenQuotaStatusRequestInfo;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ChangeAutoOpenQuotaStatusRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: ChangeAutoOpenQuotaStatusRequestInfo): ChangeAutoOpenQuotaStatusRequest {
        this['body'] = body;
        return this;
    }
}