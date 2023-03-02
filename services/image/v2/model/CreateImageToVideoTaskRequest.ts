import { ImageToVideoRequestBody } from './ImageToVideoRequestBody';


export class CreateImageToVideoTaskRequest {
    public body?: ImageToVideoRequestBody;
    public constructor() { 
    }
    public withBody(body: ImageToVideoRequestBody): CreateImageToVideoTaskRequest {
        this['body'] = body;
        return this;
    }
}