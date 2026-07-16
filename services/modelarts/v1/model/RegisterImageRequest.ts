import { ImageRegRequest } from './ImageRegRequest';


export class RegisterImageRequest {
    public body?: ImageRegRequest;
    public constructor() { 
    }
    public withBody(body: ImageRegRequest): RegisterImageRequest {
        this['body'] = body;
        return this;
    }
}