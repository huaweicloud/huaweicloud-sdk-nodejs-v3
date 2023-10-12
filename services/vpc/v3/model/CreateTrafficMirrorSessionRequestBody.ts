import { CreateTrafficMirrorSessionOption } from './CreateTrafficMirrorSessionOption';


export class CreateTrafficMirrorSessionRequestBody {
    private 'traffic_mirror_session'?: CreateTrafficMirrorSessionOption;
    public constructor(trafficMirrorSession?: CreateTrafficMirrorSessionOption) { 
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public withTrafficMirrorSession(trafficMirrorSession: CreateTrafficMirrorSessionOption): CreateTrafficMirrorSessionRequestBody {
        this['traffic_mirror_session'] = trafficMirrorSession;
        return this;
    }
    public set trafficMirrorSession(trafficMirrorSession: CreateTrafficMirrorSessionOption  | undefined) {
        this['traffic_mirror_session'] = trafficMirrorSession;
    }
    public get trafficMirrorSession(): CreateTrafficMirrorSessionOption | undefined {
        return this['traffic_mirror_session'];
    }
}