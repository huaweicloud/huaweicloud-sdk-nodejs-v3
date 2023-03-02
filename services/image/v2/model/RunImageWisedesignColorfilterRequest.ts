import { ImageWisedesignColorfilterReq } from './ImageWisedesignColorfilterReq';


export class RunImageWisedesignColorfilterRequest {
    public body?: ImageWisedesignColorfilterReq;
    public constructor() { 
    }
    public withBody(body: ImageWisedesignColorfilterReq): RunImageWisedesignColorfilterRequest {
        this['body'] = body;
        return this;
    }
}