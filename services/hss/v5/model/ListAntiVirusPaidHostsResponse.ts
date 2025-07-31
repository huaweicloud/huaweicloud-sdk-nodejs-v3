import { AntiVirusPaidHostResponseInfo } from './AntiVirusPaidHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiVirusPaidHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusPaidHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntiVirusPaidHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusPaidHostResponseInfo>): ListAntiVirusPaidHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusPaidHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusPaidHostResponseInfo> | undefined {
        return this['data_list'];
    }
}