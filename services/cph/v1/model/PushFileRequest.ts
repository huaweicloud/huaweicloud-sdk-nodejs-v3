import { PushFileRequestBody } from './PushFileRequestBody';


export class PushFileRequest {
    public body?: PushFileRequestBody;
    public constructor() { 
    }
    public withBody(body: PushFileRequestBody): PushFileRequest {
        this['body'] = body;
        return this;
    }
}