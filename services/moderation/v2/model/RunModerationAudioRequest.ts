import { RunModerationAudioRequestBody } from './RunModerationAudioRequestBody';


export class RunModerationAudioRequest {
    public body?: RunModerationAudioRequestBody;
    public constructor() { 
    }
    public withBody(body: RunModerationAudioRequestBody): RunModerationAudioRequest {
        this['body'] = body;
        return this;
    }
}