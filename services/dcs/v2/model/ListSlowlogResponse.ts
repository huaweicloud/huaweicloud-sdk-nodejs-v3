import { SlowlogItem } from './SlowlogItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowlogResponse extends SdkResponse {
    private 'total_num'?: number;
    public count?: number;
    public slowlogs?: Array<SlowlogItem>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSlowlogResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withCount(count: number): ListSlowlogResponse {
        this['count'] = count;
        return this;
    }
    public withSlowlogs(slowlogs: Array<SlowlogItem>): ListSlowlogResponse {
        this['slowlogs'] = slowlogs;
        return this;
    }
}