

export class CCEClusterIdListRequestBody {
    private 'cluster_id_list'?: Array<string>;
    private 'detect_type'?: string;
    public constructor(clusterIdList?: Array<string>) { 
        this['cluster_id_list'] = clusterIdList;
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
    public withDetectType(detectType: string): CCEClusterIdListRequestBody {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): string | undefined {
        return this['detect_type'];
    }
}