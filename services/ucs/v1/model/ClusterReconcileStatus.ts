

export class ClusterReconcileStatus {
    public clusterID?: string;
    public configSetTotalNum?: number;
    public healthStatusNum?: number;
    public failedStatusNum?: number;
    public unknownStatusNum?: number;
    public progressingStatusNum?: number;
    public k8sResourceNum?: number;
    public sourceRepoNum?: number;
    public constructor() { 
    }
    public withClusterID(clusterID: string): ClusterReconcileStatus {
        this['clusterID'] = clusterID;
        return this;
    }
    public withConfigSetTotalNum(configSetTotalNum: number): ClusterReconcileStatus {
        this['configSetTotalNum'] = configSetTotalNum;
        return this;
    }
    public withHealthStatusNum(healthStatusNum: number): ClusterReconcileStatus {
        this['healthStatusNum'] = healthStatusNum;
        return this;
    }
    public withFailedStatusNum(failedStatusNum: number): ClusterReconcileStatus {
        this['failedStatusNum'] = failedStatusNum;
        return this;
    }
    public withUnknownStatusNum(unknownStatusNum: number): ClusterReconcileStatus {
        this['unknownStatusNum'] = unknownStatusNum;
        return this;
    }
    public withProgressingStatusNum(progressingStatusNum: number): ClusterReconcileStatus {
        this['progressingStatusNum'] = progressingStatusNum;
        return this;
    }
    public withK8sResourceNum(k8sResourceNum: number): ClusterReconcileStatus {
        this['k8sResourceNum'] = k8sResourceNum;
        return this;
    }
    public withSourceRepoNum(sourceRepoNum: number): ClusterReconcileStatus {
        this['sourceRepoNum'] = sourceRepoNum;
        return this;
    }
}