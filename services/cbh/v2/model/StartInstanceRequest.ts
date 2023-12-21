import { CommonCbhRequestBody } from './CommonCbhRequestBody';


export class StartInstanceRequest {
    public body?: CommonCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: CommonCbhRequestBody): StartInstanceRequest {
        this['body'] = body;
        return this;
    }
}