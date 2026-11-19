

export class ClusterInfo {
    private 'enterprise_project_name'?: string;
    private 'cluster_version'?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'cluster_status'?: string;
    private 'installed_pod_num'?: number;
    private 'pod_num'?: number;
    private 'protect_pod_num'?: number;
    private 'create_time'?: number;
    private 'protect_status'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): ClusterInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withClusterVersion(clusterVersion: string): ClusterInfo {
        this['cluster_version'] = clusterVersion;
        return this;
    }
    public set clusterVersion(clusterVersion: string  | undefined) {
        this['cluster_version'] = clusterVersion;
    }
    public get clusterVersion(): string | undefined {
        return this['cluster_version'];
    }
    public withClusterId(clusterId: string): ClusterInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ClusterInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withClusterStatus(clusterStatus: string): ClusterInfo {
        this['cluster_status'] = clusterStatus;
        return this;
    }
    public set clusterStatus(clusterStatus: string  | undefined) {
        this['cluster_status'] = clusterStatus;
    }
    public get clusterStatus(): string | undefined {
        return this['cluster_status'];
    }
    public withInstalledPodNum(installedPodNum: number): ClusterInfo {
        this['installed_pod_num'] = installedPodNum;
        return this;
    }
    public set installedPodNum(installedPodNum: number  | undefined) {
        this['installed_pod_num'] = installedPodNum;
    }
    public get installedPodNum(): number | undefined {
        return this['installed_pod_num'];
    }
    public withPodNum(podNum: number): ClusterInfo {
        this['pod_num'] = podNum;
        return this;
    }
    public set podNum(podNum: number  | undefined) {
        this['pod_num'] = podNum;
    }
    public get podNum(): number | undefined {
        return this['pod_num'];
    }
    public withProtectPodNum(protectPodNum: number): ClusterInfo {
        this['protect_pod_num'] = protectPodNum;
        return this;
    }
    public set protectPodNum(protectPodNum: number  | undefined) {
        this['protect_pod_num'] = protectPodNum;
    }
    public get protectPodNum(): number | undefined {
        return this['protect_pod_num'];
    }
    public withCreateTime(createTime: number): ClusterInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withProtectStatus(protectStatus: string): ClusterInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
}