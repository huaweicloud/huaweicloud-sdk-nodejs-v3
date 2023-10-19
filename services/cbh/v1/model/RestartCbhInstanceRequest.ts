import { RebootCbhRequestBody } from './RebootCbhRequestBody';


export class RestartCbhInstanceRequest {
    public body?: RebootCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: RebootCbhRequestBody): RestartCbhInstanceRequest {
        this['body'] = body;
        return this;
    }
}