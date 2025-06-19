import { RunJobRequestBody } from './RunJobRequestBody';


export class ExecuteJobRequest {
    public body?: RunJobRequestBody;
    public constructor() { 
    }
    public withBody(body: RunJobRequestBody): ExecuteJobRequest {
        this['body'] = body;
        return this;
    }
}