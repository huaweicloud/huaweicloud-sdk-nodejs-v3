import { ServerIdBean } from './ServerIdBean';


export class RebootAuditInstanceRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): RebootAuditInstanceRequest {
        this['body'] = body;
        return this;
    }
}