import { ShowPageNoticesInfo } from './ShowPageNoticesInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPageNoticesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ShowPageNoticesInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowPageNoticesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ShowPageNoticesInfo>): ShowPageNoticesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ShowPageNoticesInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ShowPageNoticesInfo> | undefined {
        return this['data_list'];
    }
}