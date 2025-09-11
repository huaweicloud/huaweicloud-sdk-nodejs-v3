import { ServerIdBean } from './ServerIdBean';


export class StartAuditInstanceNewRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): StartAuditInstanceNewRequest {
        this['body'] = body;
        return this;
    }
}