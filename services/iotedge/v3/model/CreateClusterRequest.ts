import { CreateClusterRequestDTO } from './CreateClusterRequestDTO';


export class CreateClusterRequest {
    public body?: CreateClusterRequestDTO;
    public constructor() { 
    }
    public withBody(body: CreateClusterRequestDTO): CreateClusterRequest {
        this['body'] = body;
        return this;
    }
}