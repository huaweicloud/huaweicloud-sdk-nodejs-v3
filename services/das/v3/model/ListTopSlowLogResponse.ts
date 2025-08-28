import { TopSlowLogTopSlowLogList } from './TopSlowLogTopSlowLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopSlowLogResponse extends SdkResponse {
    private 'top_slow_log_list'?: Array<TopSlowLogTopSlowLogList>;
    public constructor() { 
        super();
    }
    public withTopSlowLogList(topSlowLogList: Array<TopSlowLogTopSlowLogList>): ListTopSlowLogResponse {
        this['top_slow_log_list'] = topSlowLogList;
        return this;
    }
    public set topSlowLogList(topSlowLogList: Array<TopSlowLogTopSlowLogList>  | undefined) {
        this['top_slow_log_list'] = topSlowLogList;
    }
    public get topSlowLogList(): Array<TopSlowLogTopSlowLogList> | undefined {
        return this['top_slow_log_list'];
    }
}