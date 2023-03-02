import { ImageWisedesignCropReq } from './ImageWisedesignCropReq';


export class RunImageWisedesignCropRequest {
    public body?: ImageWisedesignCropReq;
    public constructor() { 
    }
    public withBody(body: ImageWisedesignCropReq): RunImageWisedesignCropRequest {
        this['body'] = body;
        return this;
    }
}