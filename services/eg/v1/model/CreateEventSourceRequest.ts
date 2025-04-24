import { CustomizeSourceCreateReq } from './CustomizeSourceCreateReq';


export class CreateEventSourceRequest {
    public body?: CustomizeSourceCreateReq;
    public constructor() { 
    }
    public withBody(body: CustomizeSourceCreateReq): CreateEventSourceRequest {
        this['body'] = body;
        return this;
    }
}