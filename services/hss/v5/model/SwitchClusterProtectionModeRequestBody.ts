

export class SwitchClusterProtectionModeRequestBody {
    private 'cluster_ids'?: Array<string>;
    public opr?: number;
    public constructor(clusterIds?: Array<string>, opr?: number) { 
        this['cluster_ids'] = clusterIds;
        this['opr'] = opr;
    }
    public withClusterIds(clusterIds: Array<string>): SwitchClusterProtectionModeRequestBody {
        this['cluster_ids'] = clusterIds;
        return this;
    }
    public set clusterIds(clusterIds: Array<string>  | undefined) {
        this['cluster_ids'] = clusterIds;
    }
    public get clusterIds(): Array<string> | undefined {
        return this['cluster_ids'];
    }
    public withOpr(opr: number): SwitchClusterProtectionModeRequestBody {
        this['opr'] = opr;
        return this;
    }
}