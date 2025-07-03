import { CreateAkskModel } from './CreateAkskModel';


export class CreateAkSkRequest {
    public body?: CreateAkskModel;
    public constructor() { 
    }
    public withBody(body: CreateAkskModel): CreateAkSkRequest {
        this['body'] = body;
        return this;
    }
}