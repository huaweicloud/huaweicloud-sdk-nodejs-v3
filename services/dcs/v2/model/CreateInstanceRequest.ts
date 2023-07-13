import { CreateInstanceBody } from './CreateInstanceBody';


export class CreateInstanceRequest {
    public body?: CreateInstanceBody;
    public constructor() { 
    }
    public withBody(body: CreateInstanceBody): CreateInstanceRequest {
        this['body'] = body;
        return this;
    }
}