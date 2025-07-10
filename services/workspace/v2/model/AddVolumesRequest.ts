import { AddDesktopsVolumesReq } from './AddDesktopsVolumesReq';


export class AddVolumesRequest {
    public body?: AddDesktopsVolumesReq;
    public constructor() { 
    }
    public withBody(body: AddDesktopsVolumesReq): AddVolumesRequest {
        this['body'] = body;
        return this;
    }
}