import { WebFrameworkHostInfo } from './WebFrameworkHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebFrameworkHostInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebFrameworkHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebFrameworkHostInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebFrameworkHostInfo>): ListWebFrameworkHostInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebFrameworkHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebFrameworkHostInfo> | undefined {
        return this['data_list'];
    }
}