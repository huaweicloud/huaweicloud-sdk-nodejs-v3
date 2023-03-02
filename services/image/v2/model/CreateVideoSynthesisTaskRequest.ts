import { VideoSynthesisRequestBody } from './VideoSynthesisRequestBody';


export class CreateVideoSynthesisTaskRequest {
    public body?: VideoSynthesisRequestBody;
    public constructor() { 
    }
    public withBody(body: VideoSynthesisRequestBody): CreateVideoSynthesisTaskRequest {
        this['body'] = body;
        return this;
    }
}