import { CreateThumbReq } from './CreateThumbReq';


export class CreateThumbnailsTaskRequest {
    public body?: CreateThumbReq;
    public constructor() { 
    }
    public withBody(body: CreateThumbReq): CreateThumbnailsTaskRequest {
        this['body'] = body;
        return this;
    }
}