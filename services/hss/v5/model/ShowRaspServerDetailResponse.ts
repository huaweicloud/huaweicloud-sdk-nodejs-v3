import { ServerAppStatusResponseInfo } from './ServerAppStatusResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRaspServerDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ServerAppStatusResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowRaspServerDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ServerAppStatusResponseInfo>): ShowRaspServerDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ServerAppStatusResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ServerAppStatusResponseInfo> | undefined {
        return this['data_list'];
    }
}