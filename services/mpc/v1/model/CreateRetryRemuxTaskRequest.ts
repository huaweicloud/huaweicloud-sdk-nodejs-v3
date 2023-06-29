import { RemuxRetryReq } from './RemuxRetryReq';


export class CreateRetryRemuxTaskRequest {
    public body?: RemuxRetryReq;
    public constructor() { 
    }
    public withBody(body: RemuxRetryReq): CreateRetryRemuxTaskRequest {
        this['body'] = body;
        return this;
    }
}