

export class ClusterResponseInfo {
    private 'cluster_name'?: string;
    private 'cluster_id'?: string;
    private 'cluster_version'?: string;
    private 'protect_status'?: string;
    private 'policy_num'?: number;
    private 'cluster_status'?: string;
    private 'cluster_type'?: string;
    public constructor() { 
    }
    public withClusterName(clusterName: string): ClusterResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterId(clusterId: string): ClusterResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterVersion(clusterVersion: string): ClusterResponseInfo {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withProtectStatus(protectStatus: string): ClusterResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withPolicyNum(policyNum: number): ClusterResponseInfo {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
    public withClusterStatus(clusterStatus: string): ClusterResponseInfo {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string  | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus(): string | undefined {
        return this['cluster_status'];
    }
    public withClusterType(clusterType: string): ClusterResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
}