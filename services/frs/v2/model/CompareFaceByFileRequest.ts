import { CompareFaceByFileRequestBody } from './CompareFaceByFileRequestBody';


export class CompareFaceByFileRequest {
    public body?: CompareFaceByFileRequestBody;
    public constructor() { 
    }
    public withBody(body: CompareFaceByFileRequestBody): CompareFaceByFileRequest {
        this['body'] = body;
        return this;
    }
}