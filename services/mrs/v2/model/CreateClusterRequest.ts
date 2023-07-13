import { CreateClusterReqV2 } from './CreateClusterReqV2';


export class CreateClusterRequest {
    public body?: CreateClusterReqV2;
    public constructor() { 
    }
    public withBody(body: CreateClusterReqV2): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}