import { EdgeNodeCreation } from './EdgeNodeCreation';


export class CreateEdgeNodeRequest {
    public body?: EdgeNodeCreation;
    public constructor() { 
    }
    public withBody(body: EdgeNodeCreation): CreateEdgeNodeRequest {
        this['body'] = body;
        return this;
    }
}