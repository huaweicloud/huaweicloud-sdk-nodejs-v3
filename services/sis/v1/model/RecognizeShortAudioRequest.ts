import { PostShortAudioReq } from './PostShortAudioReq';


export class RecognizeShortAudioRequest {
    public body?: PostShortAudioReq;
    public constructor() { 
    }
    public withBody(body: PostShortAudioReq): RecognizeShortAudioRequest {
        this['body'] = body;
        return this;
    }
}