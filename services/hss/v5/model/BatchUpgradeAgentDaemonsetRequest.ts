import { BatchUpdateDaemonsetRequestBody } from './BatchUpdateDaemonsetRequestBody';


export class BatchUpgradeAgentDaemonsetRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchUpdateDaemonsetRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchUpgradeAgentDaemonsetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchUpdateDaemonsetRequestBody): BatchUpgradeAgentDaemonsetRequest {
        this['body'] = body;
        return this;
    }
}