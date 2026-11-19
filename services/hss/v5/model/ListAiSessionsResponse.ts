import { ListAiSessionsResponseBodyData } from './ListAiSessionsResponseBodyData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiSessionsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListAiSessionsResponseBodyData>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAiSessionsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListAiSessionsResponseBodyData>): ListAiSessionsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListAiSessionsResponseBodyData>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListAiSessionsResponseBodyData> | undefined {
        return this['data_list'];
    }
}