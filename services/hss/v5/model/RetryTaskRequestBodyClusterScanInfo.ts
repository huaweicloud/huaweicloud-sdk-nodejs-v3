import { RetryTaskRequestBodyClusterScanInfoClusterInfoList } from './RetryTaskRequestBodyClusterScanInfoClusterInfoList';


export class RetryTaskRequestBodyClusterScanInfo {
    private 'range_type'?: string;
    private 'cluster_info_list'?: Array<RetryTaskRequestBodyClusterScanInfoClusterInfoList>;
    public constructor(rangeType?: string) { 
        this['range_type'] = rangeType;
    }
    public withRangeType(rangeType: string): RetryTaskRequestBodyClusterScanInfo {
        this['range_type'] = rangeType;
        return this;
    }
    public set rangeType(rangeType: string  | undefined) {
        this['range_type'] = rangeType;
    }
    public get rangeType(): string | undefined {
        return this['range_type'];
    }
    public withClusterInfoList(clusterInfoList: Array<RetryTaskRequestBodyClusterScanInfoClusterInfoList>): RetryTaskRequestBodyClusterScanInfo {
        this['cluster_info_list'] = clusterInfoList;
        return this;
    }
    public set clusterInfoList(clusterInfoList: Array<RetryTaskRequestBodyClusterScanInfoClusterInfoList>  | undefined) {
        this['cluster_info_list'] = clusterInfoList;
    }
    public get clusterInfoList(): Array<RetryTaskRequestBodyClusterScanInfoClusterInfoList> | undefined {
        return this['cluster_info_list'];
    }
}