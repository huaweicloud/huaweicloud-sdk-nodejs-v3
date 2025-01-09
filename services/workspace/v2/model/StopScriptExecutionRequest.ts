import { StopScriptExecutionReq } from './StopScriptExecutionReq';


export class StopScriptExecutionRequest {
    public body?: StopScriptExecutionReq;
    public constructor() { 
    }
    public withBody(body: StopScriptExecutionReq): StopScriptExecutionRequest {
        this['body'] = body;
        return this;
    }
}