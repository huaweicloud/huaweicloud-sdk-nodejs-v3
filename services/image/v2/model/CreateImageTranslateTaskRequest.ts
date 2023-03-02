import { ImageTranslateRequestBody } from './ImageTranslateRequestBody';


export class CreateImageTranslateTaskRequest {
    public body?: ImageTranslateRequestBody;
    public constructor() { 
    }
    public withBody(body: ImageTranslateRequestBody): CreateImageTranslateTaskRequest {
        this['body'] = body;
        return this;
    }
}