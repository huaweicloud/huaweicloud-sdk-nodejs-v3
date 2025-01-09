import { BatchInstallAgentReq } from './BatchInstallAgentReq';


export class BatchInstallAgentRequest {
    public body?: BatchInstallAgentReq;
    public constructor() { 
    }
    public withBody(body: BatchInstallAgentReq): BatchInstallAgentRequest {
        this['body'] = body;
        return this;
    }
}