import { UserResponseInfo } from './UserResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsersResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<UserResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListUsersResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<UserResponseInfo>): ListUsersResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<UserResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<UserResponseInfo> | undefined {
        return this['data_list'];
    }
}