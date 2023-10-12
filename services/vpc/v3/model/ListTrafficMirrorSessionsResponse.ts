import { PageInfo } from './PageInfo';
import { TrafficMirrorSession } from './TrafficMirrorSession';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrafficMirrorSessionsResponse extends SdkResponse {
    private 'traffic_mirror_sessions'?: Array<TrafficMirrorSession>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorSessions(trafficMirrorSessions: Array<TrafficMirrorSession>): ListTrafficMirrorSessionsResponse {
        this['traffic_mirror_sessions'] = trafficMirrorSessions;
        return this;
    }
    public set trafficMirrorSessions(trafficMirrorSessions: Array<TrafficMirrorSession>  | undefined) {
        this['traffic_mirror_sessions'] = trafficMirrorSessions;
    }
    public get trafficMirrorSessions(): Array<TrafficMirrorSession> | undefined {
        return this['traffic_mirror_sessions'];
    }
    public withPageInfo(pageInfo: PageInfo): ListTrafficMirrorSessionsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListTrafficMirrorSessionsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}