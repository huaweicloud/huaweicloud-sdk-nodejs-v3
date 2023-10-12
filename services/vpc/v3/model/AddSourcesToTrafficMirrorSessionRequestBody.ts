import { TrafficMirrorSourcesOption } from './TrafficMirrorSourcesOption';


export class AddSourcesToTrafficMirrorSessionRequestBody {
    private 'traffic_mirror_session'?: TrafficMirrorSourcesOption;
    public constructor(trafficMirrorSession?: TrafficMirrorSourcesOption) { 
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public withTrafficMirrorSession(trafficMirrorSession: TrafficMirrorSourcesOption): AddSourcesToTrafficMirrorSessionRequestBody {
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