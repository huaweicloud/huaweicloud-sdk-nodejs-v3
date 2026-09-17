import { TopSlowLogInfo } from './TopSlowLogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopSlowLogResponse extends SdkResponse {
    private 'top_slow_log_list'?: Array<TopSlowLogInfo>;
    public constructor() { 
        super();
    }
    public withTopSlowLogList(topSlowLogList: Array<TopSlowLogInfo>): ShowTopSlowLogResponse {
        this['top_slow_log_list'] = topSlowLogList;
        return this;
    }
    public set topSlowLogList(topSlowLogList: Array<TopSlowLogInfo>  | undefined) {
        this['top_slow_log_list'] = topSlowLogList;
    }
    public get topSlowLogList(): Array<TopSlowLogInfo> | undefined {
        return this['top_slow_log_list'];
    }
}