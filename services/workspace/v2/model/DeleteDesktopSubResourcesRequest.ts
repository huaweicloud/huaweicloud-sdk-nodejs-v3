import { DeleteDesktopSubResourcesReq } from './DeleteDesktopSubResourcesReq';


export class DeleteDesktopSubResourcesRequest {
    public body?: DeleteDesktopSubResourcesReq;
    public constructor() { 
    }
    public withBody(body: DeleteDesktopSubResourcesReq): DeleteDesktopSubResourcesRequest {
        this['body'] = body;
        return this;
    }
}