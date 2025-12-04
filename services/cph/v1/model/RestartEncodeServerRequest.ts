import { RestartEncodeServerRequestBody } from './RestartEncodeServerRequestBody';


export class RestartEncodeServerRequest {
    public body?: RestartEncodeServerRequestBody;
    public constructor() { 
    }
    public withBody(body: RestartEncodeServerRequestBody): RestartEncodeServerRequest {
        this['body'] = body;
        return this;
    }
}