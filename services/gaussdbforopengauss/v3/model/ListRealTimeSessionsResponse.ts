import { RealTimeSessionResult } from './RealTimeSessionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRealTimeSessionsResponse extends SdkResponse {
    public sessions?: Array<RealTimeSessionResult>;
    public constructor() { 
        super();
    }
    public withSessions(sessions: Array<RealTimeSessionResult>): ListRealTimeSessionsResponse {
        this['sessions'] = sessions;
        return this;
    }
}