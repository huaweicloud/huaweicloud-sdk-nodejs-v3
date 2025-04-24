import { CheckPutEventsReq } from './CheckPutEventsReq';


export class CheckPutEventsRequest {
    public body?: CheckPutEventsReq;
    public constructor() { 
    }
    public withBody(body: CheckPutEventsReq): CheckPutEventsRequest {
        this['body'] = body;
        return this;
    }
}