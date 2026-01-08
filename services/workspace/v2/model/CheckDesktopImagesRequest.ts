import { CheckDesktopImagesReq } from './CheckDesktopImagesReq';


export class CheckDesktopImagesRequest {
    public body?: CheckDesktopImagesReq;
    public constructor() { 
    }
    public withBody(body: CheckDesktopImagesReq): CheckDesktopImagesRequest {
        this['body'] = body;
        return this;
    }
}