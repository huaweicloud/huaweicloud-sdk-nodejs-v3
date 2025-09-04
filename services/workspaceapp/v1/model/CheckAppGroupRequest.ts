import { CheckAppGroupReq } from './CheckAppGroupReq';


export class CheckAppGroupRequest {
    public body?: CheckAppGroupReq;
    public constructor() { 
    }
    public withBody(body: CheckAppGroupReq): CheckAppGroupRequest {
        this['body'] = body;
        return this;
    }
}