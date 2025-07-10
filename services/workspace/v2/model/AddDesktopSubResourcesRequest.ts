import { AddDesktopSubResourcesReq } from './AddDesktopSubResourcesReq';


export class AddDesktopSubResourcesRequest {
    public body?: AddDesktopSubResourcesReq;
    public constructor() { 
    }
    public withBody(body: AddDesktopSubResourcesReq): AddDesktopSubResourcesRequest {
        this['body'] = body;
        return this;
    }
}