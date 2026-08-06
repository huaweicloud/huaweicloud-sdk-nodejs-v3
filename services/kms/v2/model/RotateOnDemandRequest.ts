import { RotateOnDemandRequestBody } from './RotateOnDemandRequestBody';


export class RotateOnDemandRequest {
    public body?: RotateOnDemandRequestBody;
    public constructor() { 
    }
    public withBody(body: RotateOnDemandRequestBody): RotateOnDemandRequest {
        this['body'] = body;
        return this;
    }
}