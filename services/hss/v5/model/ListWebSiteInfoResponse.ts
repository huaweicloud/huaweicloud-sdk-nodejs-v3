import { WebSiteInfo } from './WebSiteInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebSiteInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebSiteInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebSiteInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebSiteInfo>): ListWebSiteInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebSiteInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebSiteInfo> | undefined {
        return this['data_list'];
    }
}