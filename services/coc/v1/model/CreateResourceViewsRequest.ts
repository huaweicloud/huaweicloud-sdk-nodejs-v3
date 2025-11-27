import { CreateResourceViewsRequestBody } from './CreateResourceViewsRequestBody';


export class CreateResourceViewsRequest {
    public body?: CreateResourceViewsRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateResourceViewsRequestBody): CreateResourceViewsRequest {
        this['body'] = body;
        return this;
    }
}