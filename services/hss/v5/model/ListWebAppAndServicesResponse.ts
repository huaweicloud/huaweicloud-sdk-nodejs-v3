import { WebAppAndServiceResponseInfo } from './WebAppAndServiceResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebAppAndServicesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebAppAndServiceResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebAppAndServicesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebAppAndServiceResponseInfo>): ListWebAppAndServicesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebAppAndServiceResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebAppAndServiceResponseInfo> | undefined {
        return this['data_list'];
    }
}