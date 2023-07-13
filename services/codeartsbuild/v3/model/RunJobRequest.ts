import { RunJobRequestBody } from './RunJobRequestBody';


export class RunJobRequest {
    public body?: RunJobRequestBody;
    public constructor() { 
    }
    public withBody(body: RunJobRequestBody): RunJobRequest {
        this['body'] = body;
        return this;
    }
}