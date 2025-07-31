import { UpdateNetworkPolicy } from './UpdateNetworkPolicy';


export class UpdateContainerNetworkPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public body?: UpdateNetworkPolicy;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateContainerNetworkPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): UpdateContainerNetworkPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withBody(body: UpdateNetworkPolicy): UpdateContainerNetworkPolicyRequest {
        this['body'] = body;
        return this;
    }
}