import { ImageWisedesignInpaintingReq } from './ImageWisedesignInpaintingReq';


export class RunImageWisedesignInpaintingRequest {
    public body?: ImageWisedesignInpaintingReq;
    public constructor() { 
    }
    public withBody(body: ImageWisedesignInpaintingReq): RunImageWisedesignInpaintingRequest {
        this['body'] = body;
        return this;
    }
}