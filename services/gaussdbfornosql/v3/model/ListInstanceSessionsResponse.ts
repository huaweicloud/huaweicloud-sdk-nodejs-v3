import { ListNodeSessionsResult } from './ListNodeSessionsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceSessionsResponse extends SdkResponse {
    private 'node_sessions'?: Array<ListNodeSessionsResult>;
    public constructor() { 
        super();
    }
    public withNodeSessions(nodeSessions: Array<ListNodeSessionsResult>): ListInstanceSessionsResponse {
        this['node_sessions'] = nodeSessions;
        return this;
    }
    public set nodeSessions(nodeSessions: Array<ListNodeSessionsResult>  | undefined) {
        this['node_sessions'] = nodeSessions;
    }
    public get nodeSessions(): Array<ListNodeSessionsResult> | undefined {
        return this['node_sessions'];
    }
}