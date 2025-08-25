

export class VsmResourceInfo {
    private 'cluster_num'?: number;
    private 'cpcs_cluster_num'?: number;
    private 'instance_num'?: number;
    private 'cpcs_instance_num'?: number;
    private 'instance_quota'?: number;
    public constructor(clusterNum?: number, cpcsClusterNum?: number, instanceNum?: number, cpcsInstanceNum?: number, instanceQuota?: number) { 
        this['cluster_num'] = clusterNum;
        this['cpcs_cluster_num'] = cpcsClusterNum;
        this['instance_num'] = instanceNum;
        this['cpcs_instance_num'] = cpcsInstanceNum;
        this['instance_quota'] = instanceQuota;
    }
    public withClusterNum(clusterNum: number): VsmResourceInfo {
        this['cluster_num'] = clusterNum;
        return this;
    }
    public set clusterNum(clusterNum: number  | undefined) {
        this['cluster_num'] = clusterNum;
    }
    public get clusterNum(): number | undefined {
        return this['cluster_num'];
    }
    public withCpcsClusterNum(cpcsClusterNum: number): VsmResourceInfo {
        this['cpcs_cluster_num'] = cpcsClusterNum;
        return this;
    }
    public set cpcsClusterNum(cpcsClusterNum: number  | undefined) {
        this['cpcs_cluster_num'] = cpcsClusterNum;
    }
    public get cpcsClusterNum(): number | undefined {
        return this['cpcs_cluster_num'];
    }
    public withInstanceNum(instanceNum: number): VsmResourceInfo {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withCpcsInstanceNum(cpcsInstanceNum: number): VsmResourceInfo {
        this['cpcs_instance_num'] = cpcsInstanceNum;
        return this;
    }
    public set cpcsInstanceNum(cpcsInstanceNum: number  | undefined) {
        this['cpcs_instance_num'] = cpcsInstanceNum;
    }
    public get cpcsInstanceNum(): number | undefined {
        return this['cpcs_instance_num'];
    }
    public withInstanceQuota(instanceQuota: number): VsmResourceInfo {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: number  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): number | undefined {
        return this['instance_quota'];
    }
}