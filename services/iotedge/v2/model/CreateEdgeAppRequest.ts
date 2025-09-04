import { CreateEdgeApplicationRequestDTO } from './CreateEdgeApplicationRequestDTO';


export class CreateEdgeAppRequest {
    public body?: CreateEdgeApplicationRequestDTO;
    public constructor() { 
    }
    public withBody(body: CreateEdgeApplicationRequestDTO): CreateEdgeAppRequest {
        this['body'] = body;
        return this;
    }
}