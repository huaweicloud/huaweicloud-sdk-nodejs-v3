import { ExpandDesktopsVolumesReq } from './ExpandDesktopsVolumesReq';


export class ExpandVolumesRequest {
    public body?: ExpandDesktopsVolumesReq;
    public constructor() { 
    }
    public withBody(body: ExpandDesktopsVolumesReq): ExpandVolumesRequest {
        this['body'] = body;
        return this;
    }
}