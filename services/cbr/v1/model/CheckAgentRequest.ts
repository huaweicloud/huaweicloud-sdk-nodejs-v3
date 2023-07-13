import { ProtectableAgentReq } from './ProtectableAgentReq';


export class CheckAgentRequest {
    public body?: ProtectableAgentReq;
    public constructor() { 
    }
    public withBody(body: ProtectableAgentReq): CheckAgentRequest {
        this['body'] = body;
        return this;
    }
}