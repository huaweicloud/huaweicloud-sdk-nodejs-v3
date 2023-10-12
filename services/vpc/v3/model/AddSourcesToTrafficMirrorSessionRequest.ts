import { AddSourcesToTrafficMirrorSessionRequestBody } from './AddSourcesToTrafficMirrorSessionRequestBody';


export class AddSourcesToTrafficMirrorSessionRequest {
    private 'traffic_mirror_session_id'?: string;
    public body?: AddSourcesToTrafficMirrorSessionRequestBody;
    public constructor(trafficMirrorSessionId?: string) { 
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public withTrafficMirrorSessionId(trafficMirrorSessionId: string): AddSourcesToTrafficMirrorSessionRequest {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
        return this;
    }
    public set trafficMirrorSessionId(trafficMirrorSessionId: string  | undefined) {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public get trafficMirrorSessionId(): string | undefined {
        return this['traffic_mirror_session_id'];
    }
    public withBody(body: AddSourcesToTrafficMirrorSessionRequestBody): AddSourcesToTrafficMirrorSessionRequest {
        this['body'] = body;
        return this;
    }
}