import { UpdateSecurityGroupPolicyRequestBody } from './UpdateSecurityGroupPolicyRequestBody';


export class UpdateSecurityGroupPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public namespace?: string;
    public body?: UpdateSecurityGroupPolicyRequestBody;
    public constructor(clusterId?: string, namespace?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): UpdateSecurityGroupPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): UpdateSecurityGroupPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): UpdateSecurityGroupPolicyRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: UpdateSecurityGroupPolicyRequestBody): UpdateSecurityGroupPolicyRequest {
        this['body'] = body;
        return this;
    }
}