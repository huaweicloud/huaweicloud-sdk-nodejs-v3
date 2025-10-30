import { WindowsVulDetailInfo } from './WindowsVulDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWindosVulDetailResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WindowsVulDetailInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowWindosVulDetailResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WindowsVulDetailInfo>): ShowWindosVulDetailResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WindowsVulDetailInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WindowsVulDetailInfo> | undefined {
        return this['data_list'];
    }
}