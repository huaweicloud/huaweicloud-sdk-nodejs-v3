import { ListTaskResourcesResponseInfoClusterScanDataList } from './ListTaskResourcesResponseInfoClusterScanDataList';
import { ListTaskResourcesResponseInfoIacScanDataList } from './ListTaskResourcesResponseInfoIacScanDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskResourcesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'cluster_scan_data_list'?: Array<ListTaskResourcesResponseInfoClusterScanDataList>;
    private 'iac_scan_data_list'?: Array<ListTaskResourcesResponseInfoIacScanDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListTaskResourcesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withClusterScanDataList(clusterScanDataList: Array<ListTaskResourcesResponseInfoClusterScanDataList>): ListTaskResourcesResponse {
        this['cluster_scan_data_list'] = clusterScanDataList;
        return this;
    }
    public set clusterScanDataList(clusterScanDataList: Array<ListTaskResourcesResponseInfoClusterScanDataList>  | undefined) {
        this['cluster_scan_data_list'] = clusterScanDataList;
    }
    public get clusterScanDataList(): Array<ListTaskResourcesResponseInfoClusterScanDataList> | undefined {
        return this['cluster_scan_data_list'];
    }
    public withIacScanDataList(iacScanDataList: Array<ListTaskResourcesResponseInfoIacScanDataList>): ListTaskResourcesResponse {
        this['iac_scan_data_list'] = iacScanDataList;
        return this;
    }
    public set iacScanDataList(iacScanDataList: Array<ListTaskResourcesResponseInfoIacScanDataList>  | undefined) {
        this['iac_scan_data_list'] = iacScanDataList;
    }
    public get iacScanDataList(): Array<ListTaskResourcesResponseInfoIacScanDataList> | undefined {
        return this['iac_scan_data_list'];
    }
}