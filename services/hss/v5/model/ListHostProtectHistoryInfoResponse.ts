import { HostProtectHistoryResponseInfo } from './HostProtectHistoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostProtectHistoryInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostProtectHistoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostProtectHistoryInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostProtectHistoryResponseInfo>): ListHostProtectHistoryInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostProtectHistoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostProtectHistoryResponseInfo> | undefined {
        return this['data_list'];
    }
}