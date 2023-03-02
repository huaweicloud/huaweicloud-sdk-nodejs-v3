import { VideoTranslateRequestBody } from './VideoTranslateRequestBody';


export class CreateVideoTranslateTaskRequest {
    public body?: VideoTranslateRequestBody;
    public constructor() { 
    }
    public withBody(body: VideoTranslateRequestBody): CreateVideoTranslateTaskRequest {
        this['body'] = body;
        return this;
    }
}