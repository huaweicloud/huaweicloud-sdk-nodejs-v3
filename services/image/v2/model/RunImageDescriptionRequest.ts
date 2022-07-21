import { ImageDescriptionReq } from './ImageDescriptionReq';


export class RunImageDescriptionRequest {
    public body?: ImageDescriptionReq;
    public constructor() { 
    }
    public withBody(body: ImageDescriptionReq): RunImageDescriptionRequest {
        this['body'] = body;
        return this;
    }
}