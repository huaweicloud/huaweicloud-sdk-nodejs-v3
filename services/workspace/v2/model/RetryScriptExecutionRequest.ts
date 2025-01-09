import { RetryScriptExecutionReq } from './RetryScriptExecutionReq';


export class RetryScriptExecutionRequest {
    public body?: RetryScriptExecutionReq;
    public constructor() { 
    }
    public withBody(body: RetryScriptExecutionReq): RetryScriptExecutionRequest {
        this['body'] = body;
        return this;
    }
}