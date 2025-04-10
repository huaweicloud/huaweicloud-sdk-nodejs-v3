import { LoginWhiteIpResponseInfo } from './LoginWhiteIpResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoginWhiteIpResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LoginWhiteIpResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLoginWhiteIpResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LoginWhiteIpResponseInfo>): ListLoginWhiteIpResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LoginWhiteIpResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LoginWhiteIpResponseInfo> | undefined {
        return this['data_list'];
    }
}