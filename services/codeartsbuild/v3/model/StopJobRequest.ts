import { StopJobRequestBody } from './StopJobRequestBody';


export class StopJobRequest {
    public body?: StopJobRequestBody;
    public constructor() { 
    }
    public withBody(body: StopJobRequestBody): StopJobRequest {
        this['body'] = body;
        return this;
    }
}