import { ClusterLabelInfo } from './ClusterLabelInfo';


export class UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo {
    private 'cluster_label_list'?: Array<ClusterLabelInfo>;
    public constructor() { 
    }
    public withClusterLabelList(clusterLabelList: Array<ClusterLabelInfo>): UpdateWebTamperProtectionConfigRequestInfoContainerWtpInfo {
        this['cluster_label_list'] = clusterLabelList;
        return this;
    }
    public set clusterLabelList(clusterLabelList: Array<ClusterLabelInfo>  | undefined) {
        this['cluster_label_list'] = clusterLabelList;
    }
    public get clusterLabelList(): Array<ClusterLabelInfo> | undefined {
        return this['cluster_label_list'];
    }
}