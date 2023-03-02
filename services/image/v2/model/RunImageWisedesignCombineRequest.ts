import { ImageWisedesignCombineReq } from './ImageWisedesignCombineReq';


export class RunImageWisedesignCombineRequest {
    public body?: ImageWisedesignCombineReq;
    public constructor() { 
    }
    public withBody(body: ImageWisedesignCombineReq): RunImageWisedesignCombineRequest {
        this['body'] = body;
        return this;
    }
}