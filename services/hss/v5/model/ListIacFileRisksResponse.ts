import { ListIacFileRisksResponseInfoDataList } from './ListIacFileRisksResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIacFileRisksResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListIacFileRisksResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListIacFileRisksResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListIacFileRisksResponseInfoDataList>): ListIacFileRisksResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListIacFileRisksResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListIacFileRisksResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}