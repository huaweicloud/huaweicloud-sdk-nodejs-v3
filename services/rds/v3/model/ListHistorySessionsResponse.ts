import { Session } from './Session';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistorySessionsResponse extends SdkResponse {
    private 'total_count'?: number;
    public sessions?: Array<Session>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListHistorySessionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSessions(sessions: Array<Session>): ListHistorySessionsResponse {
        this['sessions'] = sessions;
        return this;
    }
}