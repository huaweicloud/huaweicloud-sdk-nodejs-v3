import { ImageBatchModerationReq } from './ImageBatchModerationReq';


export class RunImageBatchModerationRequest {
    public body?: ImageBatchModerationReq;
    public constructor() { 
    }
    public withBody(body: ImageBatchModerationReq): RunImageBatchModerationRequest {
        this['body'] = body;
        return this;
    }
}