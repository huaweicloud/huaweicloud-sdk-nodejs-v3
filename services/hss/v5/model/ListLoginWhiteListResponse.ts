import { LoginWhiteListResponseInfo } from './LoginWhiteListResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoginWhiteListResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<LoginWhiteListResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListLoginWhiteListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<LoginWhiteListResponseInfo>): ListLoginWhiteListResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<LoginWhiteListResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<LoginWhiteListResponseInfo> | undefined {
        return this['data_list'];
    }
}