import { WebImageRequestBody } from './WebImageRequestBody';


export class RecognizeWebImageRequest {
    public body?: WebImageRequestBody;
    public constructor() { 
    }
    public withBody(body: WebImageRequestBody): RecognizeWebImageRequest {
        this['body'] = body;
        return this;
    }
}