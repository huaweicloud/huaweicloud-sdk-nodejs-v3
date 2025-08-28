import { WebFrameworkInfo } from './WebFrameworkInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebFrameworkInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebFrameworkInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebFrameworkInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebFrameworkInfo>): ListWebFrameworkInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebFrameworkInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebFrameworkInfo> | undefined {
        return this['data_list'];
    }
}