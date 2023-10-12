import { TrafficMirrorSourcesOption } from './TrafficMirrorSourcesOption';


export class RemoveSourcesFromTrafficMirrorSessionRequestBody {
    private 'traffic_mirror_session'?: TrafficMirrorSourcesOption;
    public constructor(trafficMirrorSession?: TrafficMirrorSourcesOption) { 
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public withTrafficMirrorSession(trafficMirrorSession: TrafficMirrorSourcesOption): RemoveSourcesFromTrafficMirrorSessionRequestBody {
        this['traffic_mirror_session'] = trafficMirrorSession;
        return this;
    }
    public set trafficMirrorSession(trafficMirrorSession: TrafficMirrorSourcesOption  | undefined) {
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public get trafficMirrorSession(): TrafficMirrorSourcesOption | undefined {
        return this['traffic_mirror_session'];
    }
}