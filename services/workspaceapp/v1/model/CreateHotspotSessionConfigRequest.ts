import { CreateHotspotSessionConfigReq } from './CreateHotspotSessionConfigReq';


export class CreateHotspotSessionConfigRequest {
    public body?: CreateHotspotSessionConfigReq;
    public constructor() { 
    }
    public withBody(body: CreateHotspotSessionConfigReq): CreateHotspotSessionConfigRequest {
        this['body'] = body;
        return this;
    }
}