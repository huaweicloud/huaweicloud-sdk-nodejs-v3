import { UpdateTrafficMirrorSessionRequestBody } from './UpdateTrafficMirrorSessionRequestBody';


export class UpdateTrafficMirrorSessionRequest {
    private 'traffic_mirror_session_id'?: string;
    public body?: UpdateTrafficMirrorSessionRequestBody;
    public constructor(trafficMirrorSessionId?: string) { 
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public withTrafficMirrorSessionId(trafficMirrorSessionId: string): UpdateTrafficMirrorSessionRequest {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
        return this;
    }
    public set trafficMirrorSessionId(trafficMirrorSessionId: string  | undefined) {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public get trafficMirrorSessionId(): string | undefined {
        return this['traffic_mirror_session_id'];
    }
    public withBody(body: UpdateTrafficMirrorSessionRequestBody): UpdateTrafficMirrorSessionRequest {
        this['body'] = body;
        return this;
    }
}