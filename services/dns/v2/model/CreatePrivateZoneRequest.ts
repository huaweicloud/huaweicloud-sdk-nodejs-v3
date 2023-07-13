import { CreatePrivateZoneReq } from './CreatePrivateZoneReq';


export class CreatePrivateZoneRequest {
    public body?: CreatePrivateZoneReq;
    public constructor() { 
    }
    public withBody(body: CreatePrivateZoneReq): CreatePrivateZoneRequest {
        this['body'] = body;
        return this;
    }
}