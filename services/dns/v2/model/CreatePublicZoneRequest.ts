import { CreatePublicZoneReq } from './CreatePublicZoneReq';


export class CreatePublicZoneRequest {
    public body?: CreatePublicZoneReq;
    public constructor() { 
    }
    public withBody(body: CreatePublicZoneReq): CreatePublicZoneRequest {
        this['body'] = body;
        return this;
    }
}