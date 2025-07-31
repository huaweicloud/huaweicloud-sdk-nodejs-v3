import { AppWhitelistHostResponseInfo } from './AppWhitelistHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppWhitelistHostStatusResponse extends SdkResponse {
    private 'data_list'?: Array<AppWhitelistHostResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AppWhitelistHostResponseInfo>): ListAppWhitelistHostStatusResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppWhitelistHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppWhitelistHostResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAppWhitelistHostStatusResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}