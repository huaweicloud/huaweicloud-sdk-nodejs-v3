import { ListClusterRisksResponseInfoDataList } from './ListClusterRisksResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterRisksResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListClusterRisksResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterRisksResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListClusterRisksResponseInfoDataList>): ListClusterRisksResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListClusterRisksResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListClusterRisksResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}