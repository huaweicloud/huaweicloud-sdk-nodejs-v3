import { LogoffDesktopsReq } from './LogoffDesktopsReq';


export class BatchLogoffDesktopsRequest {
    public body?: LogoffDesktopsReq;
    public constructor() { 
    }
    public withBody(body: LogoffDesktopsReq): BatchLogoffDesktopsRequest {
        this['body'] = body;
        return this;
    }
}