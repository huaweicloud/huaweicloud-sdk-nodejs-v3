import { ResqTagResource } from './ResqTagResource';


export class ListResourceRequest {
    public body?: ResqTagResource;
    public constructor() { 
    }
    public withBody(body: ResqTagResource): ListResourceRequest {
        this['body'] = body;
        return this;
    }
}