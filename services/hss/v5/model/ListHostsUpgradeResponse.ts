import { HostUpgradeResponseInfo } from './HostUpgradeResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostsUpgradeResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostUpgradeResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostsUpgradeResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostUpgradeResponseInfo>): ListHostsUpgradeResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostUpgradeResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostUpgradeResponseInfo> | undefined {
        return this['data_list'];
    }
}