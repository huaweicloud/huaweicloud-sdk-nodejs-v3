import { CreateEdgeSiteRequestBody } from './CreateEdgeSiteRequestBody';


export class CreateEdgeSiteRequest {
    public body?: CreateEdgeSiteRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateEdgeSiteRequestBody): CreateEdgeSiteRequest {
        this['body'] = body;
        return this;
    }
}