import { WebCmsVulDetailInfo } from './WebCmsVulDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCmsVulDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebCmsVulDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowCmsVulDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebCmsVulDetailInfo>): ShowCmsVulDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebCmsVulDetailInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebCmsVulDetailInfo> | undefined {
        return this['data_list'];
    }
}