import { CreateSecurityGroupPolicyRequestBody } from './CreateSecurityGroupPolicyRequestBody';


export class CreateSecurityGroupPolicyRequest {
    private 'enterprise_project_id'?: string;
    private 'cluster_id'?: string;
    public namespace?: string;
    public body?: CreateSecurityGroupPolicyRequestBody;
    public constructor(clusterId?: string, namespace?: string) { 
        this['cluster_id'] = clusterId;
        this['namespace'] = namespace;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecurityGroupPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withClusterId(clusterId: string): CreateSecurityGroupPolicyRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withNamespace(namespace: string): CreateSecurityGroupPolicyRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withBody(body: CreateSecurityGroupPolicyRequestBody): CreateSecurityGroupPolicyRequest {
        this['body'] = body;
        return this;
    }
}