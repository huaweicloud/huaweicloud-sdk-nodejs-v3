import { AddSiteReq } from './AddSiteReq';


export class AddSiteRequest {
    public body?: AddSiteReq;
    public constructor() { 
    }
    public withBody(body: AddSiteReq): AddSiteRequest {
        this['body'] = body;
        return this;
    }
}