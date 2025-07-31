import { BatchDeleteDaemonsetRequestBody } from './BatchDeleteDaemonsetRequestBody';


export class BatchDeleteAgentDaemonsetRequest {
    private 'enterprise_project_id'?: string;
    public body?: BatchDeleteDaemonsetRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchDeleteAgentDaemonsetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withBody(body: BatchDeleteDaemonsetRequestBody): BatchDeleteAgentDaemonsetRequest {
        this['body'] = body;
        return this;
    }
}