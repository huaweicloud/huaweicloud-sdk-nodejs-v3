import { ApplyInternetReq } from './ApplyInternetReq';


export class ApplyInternetRequest {
    public body?: ApplyInternetReq;
    public constructor() { 
    }
    public withBody(body: ApplyInternetReq): ApplyInternetRequest {
        this['body'] = body;
        return this;
    }
}