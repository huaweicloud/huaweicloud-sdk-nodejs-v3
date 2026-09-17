import { IndexUsageDetail } from './IndexUsageDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIndexUsageDetailsResponse extends SdkResponse {
    private 'detail_list'?: Array<IndexUsageDetail>;
    public total?: number;
    private 'collect_time'?: number;
    public constructor() { 
        super();
    }
    public withDetailList(detailList: Array<IndexUsageDetail>): ListIndexUsageDetailsResponse {
        this['detail_list'] = detailList;
        return this;
    }
    public set detailList(detailList: Array<IndexUsageDetail>  | undefined) {
        this['detail_list'] = detailList;
    }
    public get detailList(): Array<IndexUsageDetail> | undefined {
        return this['detail_list'];
    }
    public withTotal(total: number): ListIndexUsageDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withCollectTime(collectTime: number): ListIndexUsageDetailsResponse {
        this['collect_time'] = collectTime;
        return this;
    }
    public set collectTime(collectTime: number  | undefined) {
        this['collect_time'] = collectTime;
    }
    public get collectTime(): number | undefined {
        return this['collect_time'];
    }
}