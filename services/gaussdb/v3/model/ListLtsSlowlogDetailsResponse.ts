import { LtsLogSlowDetail } from './LtsLogSlowDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsSlowlogDetailsResponse extends SdkResponse {
    private 'slow_log_list'?: Array<LtsLogSlowDetail>;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<LtsLogSlowDetail>): ListLtsSlowlogDetailsResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<LtsLogSlowDetail>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<LtsLogSlowDetail> | undefined {
        return this['slow_log_list'];
    }
}