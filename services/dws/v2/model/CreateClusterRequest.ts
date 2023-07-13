import { CreateClusterRequestBody } from './CreateClusterRequestBody';


export class CreateClusterRequest {
    public body?: CreateClusterRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateClusterRequestBody): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}