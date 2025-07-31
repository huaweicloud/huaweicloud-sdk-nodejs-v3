import { AppWhitelistEventResponseInfo } from './AppWhitelistEventResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppWhitelistEventResponse extends SdkResponse {
    private 'data_list'?: Array<AppWhitelistEventResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AppWhitelistEventResponseInfo>): ListAppWhitelistEventResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppWhitelistEventResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppWhitelistEventResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAppWhitelistEventResponse {
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