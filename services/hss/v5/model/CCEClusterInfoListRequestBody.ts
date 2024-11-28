import { CCEClusterInfoListRequestBodyClusterInfoList } from './CCEClusterInfoListRequestBodyClusterInfoList';


export class CCEClusterInfoListRequestBody {
    private 'cluster_info_list'?: Array<CCEClusterInfoListRequestBodyClusterInfoList>;
    private 'cluster_id_list'?: Array<string>;
    public constructor(clusterInfoList?: Array<CCEClusterInfoListRequestBodyClusterInfoList>) { 
        this['cluster_info_list'] = clusterInfoList;
    }
    public withClusterInfoList(clusterInfoList: Array<CCEClusterInfoListRequestBodyClusterInfoList>): CCEClusterInfoListRequestBody {
        this['cluster_info_list'] = clusterInfoList;
        return this;
    }
    public set clusterInfoList(clusterInfoList: Array<CCEClusterInfoListRequestBodyClusterInfoList>  | undefined) {
        this['cluster_info_list'] = clusterInfoList;
    }
    public get clusterInfoList(): Array<CCEClusterInfoListRequestBodyClusterInfoList> | undefined {
        return this['cluster_info_list'];
    }
    public withClusterIdList(clusterIdList: Array<string>): CCEClusterInfoListRequestBody {
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