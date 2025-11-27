import { SyncResourceAgentReq } from './SyncResourceAgentReq';


export class SyncResourceAgentRequest {
    public body?: SyncResourceAgentReq;
    public constructor() { 
    }
    public withBody(body: SyncResourceAgentReq): SyncResourceAgentRequest {
        this['body'] = body;
        return this;
    }
}