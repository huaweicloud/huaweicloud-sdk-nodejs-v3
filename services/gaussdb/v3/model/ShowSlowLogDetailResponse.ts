import { ShowStarRocksSlowLogDetail } from './ShowStarRocksSlowLogDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogDetailResponse extends SdkResponse {
    private 'slow_log_list'?: Array<ShowStarRocksSlowLogDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<ShowStarRocksSlowLogDetail>): ShowSlowLogDetailResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<ShowStarRocksSlowLogDetail>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<ShowStarRocksSlowLogDetail> | undefined {
        return this['slow_log_list'];
    }
}