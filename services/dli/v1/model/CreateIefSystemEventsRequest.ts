import { IefSystemEventsReq } from './IefSystemEventsReq';


export class CreateIefSystemEventsRequest {
    public body?: IefSystemEventsReq;
    public constructor() { 
    }
    public withBody(body: IefSystemEventsReq): CreateIefSystemEventsRequest {
        this['body'] = body;
        return this;
    }
}