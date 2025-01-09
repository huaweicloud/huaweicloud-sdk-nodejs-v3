import { UpdateShareSpaceConfigReq } from './UpdateShareSpaceConfigReq';


export class UpdateShareSpaceConfigRequest {
    public body?: UpdateShareSpaceConfigReq;
    public constructor() { 
    }
    public withBody(body: UpdateShareSpaceConfigReq): UpdateShareSpaceConfigRequest {
        this['body'] = body;
        return this;
    }
}