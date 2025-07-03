import { CreateBusinessModel } from './CreateBusinessModel';


export class CreateBusinessRequest {
    public body?: CreateBusinessModel;
    public constructor() { 
    }
    public withBody(body: CreateBusinessModel): CreateBusinessRequest {
        this['body'] = body;
        return this;
    }
}