import { UpdateStorageModeReq } from './UpdateStorageModeReq';


export class UpdateStorageModeRequest {
    public body?: UpdateStorageModeReq;
    public constructor() { 
    }
    public withBody(body: UpdateStorageModeReq): UpdateStorageModeRequest {
        this['body'] = body;
        return this;
    }
}