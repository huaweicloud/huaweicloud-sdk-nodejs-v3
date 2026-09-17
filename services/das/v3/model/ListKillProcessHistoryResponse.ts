import { KillProcessHistoryInfo } from './KillProcessHistoryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListKillProcessHistoryResponse extends SdkResponse {
    private 'killed_sessions'?: Array<KillProcessHistoryInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withKilledSessions(killedSessions: Array<KillProcessHistoryInfo>): ListKillProcessHistoryResponse {
        this['killed_sessions'] = killedSessions;
        return this;
    }
    public set killedSessions(killedSessions: Array<KillProcessHistoryInfo>  | undefined) {
        this['killed_sessions'] = killedSessions;
    }
    public get killedSessions(): Array<KillProcessHistoryInfo> | undefined {
        return this['killed_sessions'];
    }
    public withTotalCount(totalCount: number): ListKillProcessHistoryResponse {
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