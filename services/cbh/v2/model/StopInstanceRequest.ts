import { CommonCbhRequestBody } from './CommonCbhRequestBody';


export class StopInstanceRequest {
    public body?: CommonCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: CommonCbhRequestBody): StopInstanceRequest {
        this['body'] = body;
        return this;
    }
}