import { RebootCbhRequestBody } from './RebootCbhRequestBody';


export class RebootInstanceRequest {
    public body?: RebootCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: RebootCbhRequestBody): RebootInstanceRequest {
        this['body'] = body;
        return this;
    }
}