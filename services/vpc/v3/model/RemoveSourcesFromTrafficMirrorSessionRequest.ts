import { RemoveSourcesFromTrafficMirrorSessionRequestBody } from './RemoveSourcesFromTrafficMirrorSessionRequestBody';


export class RemoveSourcesFromTrafficMirrorSessionRequest {
    private 'traffic_mirror_session_id'?: string;
    public body?: RemoveSourcesFromTrafficMirrorSessionRequestBody;
    public constructor(trafficMirrorSessionId?: string) { 
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public withTrafficMirrorSessionId(trafficMirrorSessionId: string): RemoveSourcesFromTrafficMirrorSessionRequest {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
        return this;
    }
    public set trafficMirrorSessionId(trafficMirrorSessionId: string  | undefined) {
        this['traffic_mirror_session_id'] = trafficMirrorSessionId;
    }
    public get trafficMirrorSessionId(): string | undefined {
        return this['traffic_mirror_session_id'];
    }
    public withBody(body: RemoveSourcesFromTrafficMirrorSessionRequestBody): RemoveSourcesFromTrafficMirrorSessionRequest {
        this['body'] = body;
        return this;
    }
}