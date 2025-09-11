import { ServerIdBean } from './ServerIdBean';


export class RebootAuditInstanceNewRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): RebootAuditInstanceNewRequest {
        this['body'] = body;
        return this;
    }
}