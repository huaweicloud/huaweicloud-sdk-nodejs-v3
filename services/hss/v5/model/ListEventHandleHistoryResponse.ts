import { EventHandleHistory } from './EventHandleHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventHandleHistoryResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<EventHandleHistory>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListEventHandleHistoryResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<EventHandleHistory>): ListEventHandleHistoryResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<EventHandleHistory>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<EventHandleHistory> | undefined {
        return this['data_list'];
    }
}