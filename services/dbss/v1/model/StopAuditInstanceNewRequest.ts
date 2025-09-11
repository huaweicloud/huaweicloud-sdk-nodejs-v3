import { ServerIdBean } from './ServerIdBean';


export class StopAuditInstanceNewRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): StopAuditInstanceNewRequest {
        this['body'] = body;
        return this;
    }
}