import { BatchCreateTrafficMirrorFilterRulesRequestBody } from './BatchCreateTrafficMirrorFilterRulesRequestBody';


export class BatchCreateTrafficMirrorFilterRulesRequest {
    private 'traffic_mirror_filter_id'?: string;
    public body?: BatchCreateTrafficMirrorFilterRulesRequestBody;
    public constructor(trafficMirrorFilterId?: string) { 
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): BatchCreateTrafficMirrorFilterRulesRequest {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withBody(body: BatchCreateTrafficMirrorFilterRulesRequestBody): BatchCreateTrafficMirrorFilterRulesRequest {
        this['body'] = body;
        return this;
    }
}