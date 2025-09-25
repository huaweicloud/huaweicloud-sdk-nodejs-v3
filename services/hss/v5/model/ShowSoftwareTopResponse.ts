import { CommonTopResponseInfo } from './CommonTopResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSoftwareTopResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<CommonTopResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowSoftwareTopResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<CommonTopResponseInfo>): ShowSoftwareTopResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CommonTopResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CommonTopResponseInfo> | undefined {
        return this['data_list'];
    }
}