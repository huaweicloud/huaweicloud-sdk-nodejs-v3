import { DesktopToImageReq } from './DesktopToImageReq';


export class ChangeDesktopToImageRequest {
    public body?: DesktopToImageReq;
    public constructor() { 
    }
    public withBody(body: DesktopToImageReq): ChangeDesktopToImageRequest {
        this['body'] = body;
        return this;
    }
}