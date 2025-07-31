import { WebSiteHostInfo } from './WebSiteHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebSiteHostInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebSiteHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebSiteHostInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebSiteHostInfo>): ListWebSiteHostInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebSiteHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebSiteHostInfo> | undefined {
        return this['data_list'];
    }
}