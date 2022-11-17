import { ChangeInstanceStatusBody } from './ChangeInstanceStatusBody';


export class RestartOrFlushInstancesRequest {
    public body?: ChangeInstanceStatusBody;
    public constructor() { 
    }
    public withBody(body: ChangeInstanceStatusBody): RestartOrFlushInstancesRequest {
        this['body'] = body;
        return this;
    }
}