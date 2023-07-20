import { QuerySessionResponse } from './QuerySessionResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSessionsResponse extends SdkResponse {
    private 'total_count'?: number;
    public sessions?: Array<QuerySessionResponse>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListSessionsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withSessions(sessions: Array<QuerySessionResponse>): ListSessionsResponse {
        this['sessions'] = sessions;
        return this;
    }
}