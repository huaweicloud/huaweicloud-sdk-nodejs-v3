import { TopDataInfo } from './TopDataInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopTrendResponse extends SdkResponse {
    private 'top_data_list'?: Array<TopDataInfo>;
    public constructor() { 
        super();
    }
    public withTopDataList(topDataList: Array<TopDataInfo>): ShowTopTrendResponse {
        this['top_data_list'] = topDataList;
        return this;
    }
    public set topDataList(topDataList: Array<TopDataInfo>  | undefined) {
        this['top_data_list'] = topDataList;
    }
    public get topDataList(): Array<TopDataInfo> | undefined {
        return this['top_data_list'];
    }
}