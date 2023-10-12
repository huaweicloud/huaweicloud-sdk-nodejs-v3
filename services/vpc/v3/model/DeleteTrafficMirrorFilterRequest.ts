

export class DeleteTrafficMirrorFilterRequest {
    private 'traffic_mirror_filter_id'?: string;
    public constructor(trafficMirrorFilterId?: string) { 
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public withTrafficMirrorFilterId(trafficMirrorFilterId: string): DeleteTrafficMirrorFilterRequest {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
        return this;
    }
    public set trafficMirrorFilterId(trafficMirrorFilterId: string  | undefined) {
        this['traffic_mirror_filter_id'] = trafficMirrorFilterId;
    }
    public get trafficMirrorFilterId(): string | undefined {
        return this['traffic_mirror_filter_id'];
    }
}