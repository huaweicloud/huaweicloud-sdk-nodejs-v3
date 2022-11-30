import { AudioCreateRequest } from './AudioCreateRequest';


export class RunCreateAudioModerationJobRequest {
    public body?: AudioCreateRequest;
    public constructor() { 
    }
    public withBody(body: AudioCreateRequest): RunCreateAudioModerationJobRequest {
        this['body'] = body;
        return this;
    }
}