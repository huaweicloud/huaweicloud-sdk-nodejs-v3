import { CreatePrivateDnatOptionBody } from './CreatePrivateDnatOptionBody';


export class CreatePrivateDnatRequest {
    public body?: CreatePrivateDnatOptionBody;
    public constructor() { 
    }
    public withBody(body: CreatePrivateDnatOptionBody): CreatePrivateDnatRequest {
        this['body'] = body;
        return this;
    }
}