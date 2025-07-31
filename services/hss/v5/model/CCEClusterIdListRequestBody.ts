

export class CCEClusterIdListRequestBody {
    private 'cluster_id_list'?: Array<string>;
    public constructor() { 
    }
    public withClusterIdList(clusterIdList: Array<string>): CCEClusterIdListRequestBody {
        this['cluster_id_list'] = clusterIdList;
        return this;
    }
    public set clusterIdList(clusterIdList: Array<string>  | undefined) {
        this['cluster_id_list'] = clusterIdList;
    }
    public get clusterIdList(): Array<string> | undefined {
        return this['cluster_id_list'];
    }
}