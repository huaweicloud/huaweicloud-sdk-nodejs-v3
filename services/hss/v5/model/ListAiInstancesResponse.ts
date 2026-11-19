import { ListAiInstancesResponseBodyData } from './ListAiInstancesResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiInstancesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListAiInstancesResponseBodyData>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAiInstancesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListAiInstancesResponseBodyData>): ListAiInstancesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListAiInstancesResponseBodyData>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListAiInstancesResponseBodyData> | undefined {
        return this['data_list'];
    }
}