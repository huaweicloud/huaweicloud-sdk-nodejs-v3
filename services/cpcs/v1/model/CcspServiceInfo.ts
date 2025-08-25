import { InstanceDistribution } from './InstanceDistribution';


export class CcspServiceInfo {
    private 'cluster_num'?: number;
    private 'instance_num'?: number;
    private 'instance_quota'?: number;
    private 'instance_distribution'?: InstanceDistribution;
    public constructor(clusterNum?: number, instanceNum?: number, instanceQuota?: number, instanceDistribution?: InstanceDistribution) { 
        this['cluster_num'] = clusterNum;
        this['instance_num'] = instanceNum;
        this['instance_quota'] = instanceQuota;
        this['instance_distribution'] = instanceDistribution;
    }
    public withClusterNum(clusterNum: number): CcspServiceInfo {
        this['cluster_num'] = clusterNum;
        return this;
    }
    public set clusterNum(clusterNum: number  | undefined) {
        this['cluster_num'] = clusterNum;
    }
    public get clusterNum(): number | undefined {
        return this['cluster_num'];
    }
    public withInstanceNum(instanceNum: number): CcspServiceInfo {
        this['instance_num'] = instanceNum;
        return this;
    }
    public set instanceNum(instanceNum: number  | undefined) {
        this['instance_num'] = instanceNum;
    }
    public get instanceNum(): number | undefined {
        return this['instance_num'];
    }
    public withInstanceQuota(instanceQuota: number): CcspServiceInfo {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: number  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): number | undefined {
        return this['instance_quota'];
    }
    public withInstanceDistribution(instanceDistribution: InstanceDistribution): CcspServiceInfo {
        this['instance_distribution'] = instanceDistribution;
        return this;
    }
    public set instanceDistribution(instanceDistribution: InstanceDistribution  | undefined) {
        this['instance_distribution'] = instanceDistribution;
    }
    public get instanceDistribution(): InstanceDistribution | undefined {
        return this['instance_distribution'];
    }
}