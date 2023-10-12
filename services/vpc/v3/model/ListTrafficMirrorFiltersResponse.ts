import { PageInfo } from './PageInfo';
import { TrafficMirrorFilter } from './TrafficMirrorFilter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTrafficMirrorFiltersResponse extends SdkResponse {
    private 'traffic_mirror_filters'?: Array<TrafficMirrorFilter>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorFilters(trafficMirrorFilters: Array<TrafficMirrorFilter>): ListTrafficMirrorFiltersResponse {
        this['traffic_mirror_filters'] = trafficMirrorFilters;
        return this;
    }
    public set trafficMirrorFilters(trafficMirrorFilters: Array<TrafficMirrorFilter>  | undefined) {
        this['traffic_mirror_filters'] = trafficMirrorFilters;
    }
    public get trafficMirrorFilters(): Array<TrafficMirrorFilter> | undefined {
        return this['traffic_mirror_filters'];
    }
    public withPageInfo(pageInfo: PageInfo): ListTrafficMirrorFiltersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListTrafficMirrorFiltersResponse {
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