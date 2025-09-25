import { HotInfo } from './HotInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHotInformationResponse extends SdkResponse {
    private 'data_list'?: HotInfo;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: HotInfo): ShowHotInformationResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: HotInfo  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): HotInfo | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ShowHotInformationResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}