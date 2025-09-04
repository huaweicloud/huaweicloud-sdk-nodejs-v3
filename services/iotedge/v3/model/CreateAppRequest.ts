import { CreateAppRequestDTO } from './CreateAppRequestDTO';


export class CreateAppRequest {
    public body?: CreateAppRequestDTO;
    public constructor() { 
    }
    public withBody(body: CreateAppRequestDTO): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}