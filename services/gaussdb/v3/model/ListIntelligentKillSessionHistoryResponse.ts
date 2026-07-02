import { IntelligentKillSessionHistory } from './IntelligentKillSessionHistory';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListIntelligentKillSessionHistoryResponse extends SdkResponse {
    private 'intelligent_kill_session_histories'?: Array<IntelligentKillSessionHistory>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withIntelligentKillSessionHistories(intelligentKillSessionHistories: Array<IntelligentKillSessionHistory>): ListIntelligentKillSessionHistoryResponse {
        this['intelligent_kill_session_histories'] = intelligentKillSessionHistories;
        return this;
    }
    public set intelligentKillSessionHistories(intelligentKillSessionHistories: Array<IntelligentKillSessionHistory>  | undefined) {
        this['intelligent_kill_session_histories'] = intelligentKillSessionHistories;
    }
    public get intelligentKillSessionHistories(): Array<IntelligentKillSessionHistory> | undefined {
        return this['intelligent_kill_session_histories'];
    }
    public withTotalCount(totalCount: number): ListIntelligentKillSessionHistoryResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}