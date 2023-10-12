

export class TrafficMirrorSourcesOption {
    private 'traffic_mirror_sources'?: Array<string>;
    public constructor(trafficMirrorSources?: Array<string>) { 
        this['traffic_mirror_sources'] = trafficMirrorSources;
    }
    public withTrafficMirrorSources(trafficMirrorSources: Array<string>): TrafficMirrorSourcesOption {
        this['traffic_mirror_sources'] = trafficMirrorSources;
        return this;
    }
    public set trafficMirrorSources(trafficMirrorSources: Array<string>  | undefined) {
        this['traffic_mirror_sources'] = trafficMirrorSources;
    }
    public get trafficMirrorSources(): Array<string> | undefined {
        return this['traffic_mirror_sources'];
    }
}