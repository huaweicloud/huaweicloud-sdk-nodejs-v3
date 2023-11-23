import { CheckPrefixReq } from './CheckPrefixReq';


export class CheckPrefixRequest {
    public body?: CheckPrefixReq;
    public constructor() { 
    }
    public withBody(body: CheckPrefixReq): CheckPrefixRequest {
        this['body'] = body;
        return this;
    }
}