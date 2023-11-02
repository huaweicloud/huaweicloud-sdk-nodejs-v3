import { ApigChangeResourceReq } from './ApigChangeResourceReq';


export class ChangeResourceRequest {
    public body?: ApigChangeResourceReq;
    public constructor() { 
    }
    public withBody(body: ApigChangeResourceReq): ChangeResourceRequest {
        this['body'] = body;
        return this;
    }
}