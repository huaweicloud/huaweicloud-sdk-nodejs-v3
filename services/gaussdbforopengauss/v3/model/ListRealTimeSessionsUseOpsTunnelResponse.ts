import { RealTimeSessionResult } from './RealTimeSessionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRealTimeSessionsUseOpsTunnelResponse extends SdkResponse {
    public sessions?: Array<RealTimeSessionResult>;
    public constructor() { 
        super();
    }
    public withSessions(sessions: Array<RealTimeSessionResult>): ListRealTimeSessionsUseOpsTunnelResponse {
        this['sessions'] = sessions;
        return this;
    }
}