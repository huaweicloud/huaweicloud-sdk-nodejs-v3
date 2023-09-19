import { CreateClusterReq } from './CreateClusterReq';


export class CreateClusterRequest {
    public body?: CreateClusterReq;
    public constructor() { 
    }
    public withBody(body: CreateClusterReq): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}