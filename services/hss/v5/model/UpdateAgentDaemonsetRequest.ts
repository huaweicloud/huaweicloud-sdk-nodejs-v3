import { UpdateDaemonsetRequestBody } from './UpdateDaemonsetRequestBody';


export class UpdateAgentDaemonsetRequest {
    public region?: string;
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public body?: UpdateDaemonsetRequestBody;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withRegion(region: string): UpdateAgentDaemonsetRequest {
        this['region'] = region;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateAgentDaemonsetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): UpdateAgentDaemonsetRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateDaemonsetRequestBody): UpdateAgentDaemonsetRequest {
        this['body'] = body;
        return this;
    }
}