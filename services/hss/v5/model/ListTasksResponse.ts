import { ListTasksResponseInfoDataList } from './ListTasksResponseInfoDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTasksResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListTasksResponseInfoDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListTasksResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListTasksResponseInfoDataList>): ListTasksResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListTasksResponseInfoDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListTasksResponseInfoDataList> | undefined {
        return this['data_list'];
    }
}