

export class ClustersResponseInfo {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_type'?: string;
    public version?: string;
    public mode?: string;
    private 'namespace_num'?: number;
    private 'policy_num'?: number;
    private 'protection_status'?: boolean;
    public constructor() { 
    }
    public withClusterId(clusterId: string): ClustersResponseInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClustersResponseInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterType(clusterType: string): ClustersResponseInfo {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withVersion(version: string): ClustersResponseInfo {
        this['version'] = version;
        return this;
    }
    public withMode(mode: string): ClustersResponseInfo {
        this['mode'] = mode;
        return this;
    }
    public withNamespaceNum(namespaceNum: number): ClustersResponseInfo {
        this['namespace_num'] = namespaceNum;
        return this;
    }
    public set namespaceNum(namespaceNum: number  | undefined) {
        this['namespace_num'] = namespaceNum;
    }
    public get namespaceNum(): number | undefined {
        return this['namespace_num'];
    }
    public withPolicyNum(policyNum: number): ClustersResponseInfo {
        this['policy_num'] = policyNum;
        return this;
    }
    public set policyNum(policyNum: number  | undefined) {
        this['policy_num'] = policyNum;
    }
    public get policyNum(): number | undefined {
        return this['policy_num'];
    }
    public withProtectionStatus(protectionStatus: boolean): ClustersResponseInfo {
        this['protection_status'] = protectionStatus;
        return this;
    }
    public set protectionStatus(protectionStatus: boolean  | undefined) {
        this['protection_status'] = protectionStatus;
    }
    public get protectionStatus(): boolean | undefined {
        return this['protection_status'];
    }
}