import { BlockedIpResponseInfo } from './BlockedIpResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBlockedIpResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<BlockedIpResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListBlockedIpResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<BlockedIpResponseInfo>): ListBlockedIpResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<BlockedIpResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<BlockedIpResponseInfo> | undefined {
        return this['data_list'];
    }
}