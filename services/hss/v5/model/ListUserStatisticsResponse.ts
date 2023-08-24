import { UserStatisticInfoResponseInfo } from './UserStatisticInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<UserStatisticInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListUserStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<UserStatisticInfoResponseInfo>): ListUserStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UserStatisticInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UserStatisticInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}