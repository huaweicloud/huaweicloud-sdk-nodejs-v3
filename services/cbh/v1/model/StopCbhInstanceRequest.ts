import { StopCbhRequestBody } from './StopCbhRequestBody';


export class StopCbhInstanceRequest {
    public body?: StopCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: StopCbhRequestBody): StopCbhInstanceRequest {
        this['body'] = body;
        return this;
    }
}