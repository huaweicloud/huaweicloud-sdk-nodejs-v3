import { ClusterAuditLogResponseInfo } from './ClusterAuditLogResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterAuditLogsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ClusterAuditLogResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterAuditLogsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ClusterAuditLogResponseInfo>): ListClusterAuditLogsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ClusterAuditLogResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ClusterAuditLogResponseInfo> | undefined {
        return this['data_list'];
    }
}