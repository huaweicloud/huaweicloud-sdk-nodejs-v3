import { SubAppCreateParam } from './SubAppCreateParam';


export class CreateSubAppRequest {
    public body?: SubAppCreateParam;
    public constructor() { 
    }
    public withBody(body: SubAppCreateParam): CreateSubAppRequest {
        this['body'] = body;
        return this;
    }
}