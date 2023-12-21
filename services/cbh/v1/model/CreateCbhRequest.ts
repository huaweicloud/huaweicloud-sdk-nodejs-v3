import { CreateInstanceBody } from './CreateInstanceBody';


export class CreateCbhRequest {
    public body?: CreateInstanceBody;
    public constructor() { 
    }
    public withBody(body: CreateInstanceBody): CreateCbhRequest {
        this['body'] = body;
        return this;
    }
}