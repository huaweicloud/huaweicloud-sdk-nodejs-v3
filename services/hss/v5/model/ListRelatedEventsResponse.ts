import { RelatedEventInfo } from './RelatedEventInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRelatedEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<RelatedEventInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRelatedEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<RelatedEventInfo>): ListRelatedEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<RelatedEventInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<RelatedEventInfo> | undefined {
        return this['data_list'];
    }
}