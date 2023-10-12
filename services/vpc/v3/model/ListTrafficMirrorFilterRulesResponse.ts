import { PageInfo } from './PageInfo';
import { TrafficMirrorFilterRule } from './TrafficMirrorFilterRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrafficMirrorFilterRulesResponse extends SdkResponse {
    private 'traffic_mirror_filter_rules'?: Array<TrafficMirrorFilterRule>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorFilterRules(trafficMirrorFilterRules: Array<TrafficMirrorFilterRule>): ListTrafficMirrorFilterRulesResponse {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
        return this;
    }
    public set trafficMirrorFilterRules(trafficMirrorFilterRules: Array<TrafficMirrorFilterRule>  | undefined) {
        this['traffic_mirror_filter_rules'] = trafficMirrorFilterRules;
    }
    public get trafficMirrorFilterRules(): Array<TrafficMirrorFilterRule> | undefined {
        return this['traffic_mirror_filter_rules'];
    }
    public withPageInfo(pageInfo: PageInfo): ListTrafficMirrorFilterRulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListTrafficMirrorFilterRulesResponse {
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