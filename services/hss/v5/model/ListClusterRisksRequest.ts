

export class ListClusterRisksRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'risk_type'?: string;
    private 'risk_status'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'risk_name'?: string;
    private 'risk_level'?: string;
    private 'risk_category'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterRisksRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListClusterRisksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClusterRisksRequest {
        this['limit'] = limit;
        return this;
    }
    public withRiskType(riskType: string): ListClusterRisksRequest {
        this['risk_type'] = riskType;
        return this;
    }
    public set riskType(riskType: string  | undefined) {
        this['risk_type'] = riskType;
    }
    public get riskType(): string | undefined {
        return this['risk_type'];
    }
    public withRiskStatus(riskStatus: string): ListClusterRisksRequest {
        this['risk_status'] = riskStatus;
        return this;
    }
    public set riskStatus(riskStatus: string  | undefined) {
        this['risk_status'] = riskStatus;
    }
    public get riskStatus(): string | undefined {
        return this['risk_status'];
    }
    public withClusterId(clusterId: string): ListClusterRisksRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ListClusterRisksRequest {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withRiskName(riskName: string): ListClusterRisksRequest {
        this['risk_name'] = riskName;
        return this;
    }
    public set riskName(riskName: string  | undefined) {
        this['risk_name'] = riskName;
    }
    public get riskName(): string | undefined {
        return this['risk_name'];
    }
    public withRiskLevel(riskLevel: string): ListClusterRisksRequest {
        this['risk_level'] = riskLevel;
        return this;
    }
    public set riskLevel(riskLevel: string  | undefined) {
        this['risk_level'] = riskLevel;
    }
    public get riskLevel(): string | undefined {
        return this['risk_level'];
    }
    public withRiskCategory(riskCategory: string): ListClusterRisksRequest {
        this['risk_category'] = riskCategory;
        return this;
    }
    public set riskCategory(riskCategory: string  | undefined) {
        this['risk_category'] = riskCategory;
    }
    public get riskCategory(): string | undefined {
        return this['risk_category'];
    }
}