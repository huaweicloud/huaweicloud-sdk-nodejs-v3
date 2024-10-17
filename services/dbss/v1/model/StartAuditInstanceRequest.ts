import { ServerIdBean } from './ServerIdBean';


export class StartAuditInstanceRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): StartAuditInstanceRequest {
        this['body'] = body;
        return this;
    }
}