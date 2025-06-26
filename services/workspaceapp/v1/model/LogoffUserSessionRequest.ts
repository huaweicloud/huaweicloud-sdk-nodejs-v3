import { LogoffUserSessionReq } from './LogoffUserSessionReq';


export class LogoffUserSessionRequest {
    public body?: LogoffUserSessionReq;
    public constructor() { 
    }
    public withBody(body: LogoffUserSessionReq): LogoffUserSessionRequest {
        this['body'] = body;
        return this;
    }
}