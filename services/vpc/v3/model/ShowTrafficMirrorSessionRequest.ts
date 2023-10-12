

export class ShowTrafficMirrorSessionRequest {
    private 'traffic_mirror_session_id'?: string;
    public constructor(trafficMirrorSessionId?: string) { 
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public withTrafficMirrorSessionId(trafficMirrorSessionId: string): ShowTrafficMirrorSessionRequest {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
        return this;
    }
    public set trafficMirrorSessionId(trafficMirrorSessionId: string  | undefined) {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public get trafficMirrorSessionId(): string | undefined {
        return this['traffic_mirror_session_id'];
    }
}