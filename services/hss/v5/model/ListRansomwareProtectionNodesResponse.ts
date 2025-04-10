import { ProtectionServerInfo } from './ProtectionServerInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRansomwareProtectionNodesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ProtectionServerInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRansomwareProtectionNodesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ProtectionServerInfo>): ListRansomwareProtectionNodesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProtectionServerInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProtectionServerInfo> | undefined {
        return this['data_list'];
    }
}