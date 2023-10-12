import { TrafficMirrorFilter } from './TrafficMirrorFilter';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTrafficMirrorFilterResponse extends SdkResponse {
    private 'traffic_mirror_filter'?: TrafficMirrorFilter;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTrafficMirrorFilter(trafficMirrorFilter: TrafficMirrorFilter): CreateTrafficMirrorFilterResponse {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
        return this;
    }
    public set trafficMirrorFilter(trafficMirrorFilter: TrafficMirrorFilter  | undefined) {
        this['traffic_mirror_filter'] = trafficMirrorFilter;
    }
    public get trafficMirrorFilter(): TrafficMirrorFilter | undefined {
        return this['traffic_mirror_filter'];
    }
    public withRequestId(requestId: string): CreateTrafficMirrorFilterResponse {
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