import { SimilarHandledEvent } from './SimilarHandledEvent';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSimilarHandledEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SimilarHandledEvent>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSimilarHandledEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SimilarHandledEvent>): ListSimilarHandledEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SimilarHandledEvent>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SimilarHandledEvent> | undefined {
        return this['data_list'];
    }
}