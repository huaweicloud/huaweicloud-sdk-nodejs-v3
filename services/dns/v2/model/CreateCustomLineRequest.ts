import { CreateCustomLines } from './CreateCustomLines';


export class CreateCustomLineRequest {
    public body?: CreateCustomLines;
    public constructor() { 
    }
    public withBody(body: CreateCustomLines): CreateCustomLineRequest {
        this['body'] = body;
        return this;
    }
}