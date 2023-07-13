import { CreateClusterReqV11 } from './CreateClusterReqV11';


export class CreateClusterRequest {
    public body?: CreateClusterReqV11;
    public constructor() { 
    }
    public withBody(body: CreateClusterReqV11): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}