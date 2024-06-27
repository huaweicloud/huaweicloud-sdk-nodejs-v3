import { ChSlowLogDetailResponseSlowLogList } from './ChSlowLogDetailResponseSlowLogList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClickHouseSlowLogDetailResponse extends SdkResponse {
    private 'slow_log_list'?: Array<ChSlowLogDetailResponseSlowLogList>;
    public constructor() { 
        super();
    }
    public withSlowLogList(slowLogList: Array<ChSlowLogDetailResponseSlowLogList>): ShowClickHouseSlowLogDetailResponse {
        this['slow_log_list'] = slowLogList;
        return this;
    }
    public set slowLogList(slowLogList: Array<ChSlowLogDetailResponseSlowLogList>  | undefined) {
        this['slow_log_list'] = slowLogList;
    }
    public get slowLogList(): Array<ChSlowLogDetailResponseSlowLogList> | undefined {
        return this['slow_log_list'];
    }
}