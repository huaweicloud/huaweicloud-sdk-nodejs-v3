import { WeakPwdListInfoResponseInfo } from './WeakPwdListInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWeakPasswordUsersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WeakPwdListInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWeakPasswordUsersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WeakPwdListInfoResponseInfo>): ListWeakPasswordUsersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WeakPwdListInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WeakPwdListInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}