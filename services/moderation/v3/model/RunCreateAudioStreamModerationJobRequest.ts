import { AudioStreamCreateRequest } from './AudioStreamCreateRequest';


export class RunCreateAudioStreamModerationJobRequest {
    public body?: AudioStreamCreateRequest;
    public constructor() { 
    }
    public withBody(body: AudioStreamCreateRequest): RunCreateAudioStreamModerationJobRequest {
        this['body'] = body;
        return this;
    }
}