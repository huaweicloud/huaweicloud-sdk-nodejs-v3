import { HostRaspProtectHistoryResponseInfo } from './HostRaspProtectHistoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostRaspProtectHistoryInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostRaspProtectHistoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostRaspProtectHistoryInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostRaspProtectHistoryResponseInfo>): ListHostRaspProtectHistoryInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostRaspProtectHistoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostRaspProtectHistoryResponseInfo> | undefined {
        return this['data_list'];
    }
}