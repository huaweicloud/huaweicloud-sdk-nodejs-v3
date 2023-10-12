import { UpdateTrafficMirrorSessionOption } from './UpdateTrafficMirrorSessionOption';


export class UpdateTrafficMirrorSessionRequestBody {
    private 'traffic_mirror_session'?: UpdateTrafficMirrorSessionOption;
    public constructor(trafficMirrorSession?: UpdateTrafficMirrorSessionOption) { 
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public withTrafficMirrorSession(trafficMirrorSession: UpdateTrafficMirrorSessionOption): UpdateTrafficMirrorSessionRequestBody {
        this['traffic_mirror_session'] = trafficMirrorSession;
        return this;
    }
    public set trafficMirrorSession(trafficMirrorSession: UpdateTrafficMirrorSessionOption  | undefined) {
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public get trafficMirrorSession(): UpdateTrafficMirrorSessionOption | undefined {
        return this['traffic_mirror_session'];
    }
}