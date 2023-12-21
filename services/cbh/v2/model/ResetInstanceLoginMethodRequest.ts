import { CommonCbhRequestBody } from './CommonCbhRequestBody';


export class ResetInstanceLoginMethodRequest {
    public body?: CommonCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: CommonCbhRequestBody): ResetInstanceLoginMethodRequest {
        this['body'] = body;
        return this;
    }
}