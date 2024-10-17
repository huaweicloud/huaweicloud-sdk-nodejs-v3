import { ServerIdBean } from './ServerIdBean';


export class StopAuditInstanceRequest {
    public body?: ServerIdBean;
    public constructor() { 
    }
    public withBody(body: ServerIdBean): StopAuditInstanceRequest {
        this['body'] = body;
        return this;
    }
}