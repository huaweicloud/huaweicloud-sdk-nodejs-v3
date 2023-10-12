import { UpdateTrafficMirrorFilterRequestBody } from './UpdateTrafficMirrorFilterRequestBody';


export class UpdateTrafficMirrorFilterRequest {
    private 'traffic_mirror_filter_id'?: string;
    public body?: UpdateTrafficMirrorFilterRequestBody;
    public constructor(trafficMirrorFilterId?: string) { 
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): UpdateTrafficMirrorFilterRequest {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
    public withBody(body: UpdateTrafficMirrorFilterRequestBody): UpdateTrafficMirrorFilterRequest {
        this['body'] = body;
        return this;
    }
}