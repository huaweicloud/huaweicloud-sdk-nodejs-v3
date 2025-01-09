import { UpdateDesktopSidReq } from './UpdateDesktopSidReq';


export class UpdateDesktopSidsRequest {
    public body?: UpdateDesktopSidReq;
    public constructor() { 
    }
    public withBody(body: UpdateDesktopSidReq): UpdateDesktopSidsRequest {
        this['body'] = body;
        return this;
    }
}