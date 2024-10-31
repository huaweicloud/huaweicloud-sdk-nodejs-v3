import { UpdateStorageModeTypeReq } from './UpdateStorageModeTypeReq';


export class UpdateStorageModeTypeRequest {
    public body?: UpdateStorageModeTypeReq;
    public constructor() { 
    }
    public withBody(body: UpdateStorageModeTypeReq): UpdateStorageModeTypeRequest {
        this['body'] = body;
        return this;
    }
}