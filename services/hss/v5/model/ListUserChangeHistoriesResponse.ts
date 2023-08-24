import { UserChangeHistoryResponseInfo } from './UserChangeHistoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserChangeHistoriesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<UserChangeHistoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListUserChangeHistoriesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<UserChangeHistoryResponseInfo>): ListUserChangeHistoriesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UserChangeHistoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UserChangeHistoryResponseInfo> | undefined {
        return this['data_list'];
    }
}