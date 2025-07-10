import { ApplyDesktopsInternetReq } from './ApplyDesktopsInternetReq';


export class ApplyDesktopsInternetRequest {
    public body?: ApplyDesktopsInternetReq;
    public constructor() { 
    }
    public withBody(body: ApplyDesktopsInternetReq): ApplyDesktopsInternetRequest {
        this['body'] = body;
        return this;
    }
}