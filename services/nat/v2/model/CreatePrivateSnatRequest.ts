import { CreatePrivateSnatOptionBody } from './CreatePrivateSnatOptionBody';


export class CreatePrivateSnatRequest {
    public body?: CreatePrivateSnatOptionBody;
    public constructor() { 
    }
    public withBody(body: CreatePrivateSnatOptionBody): CreatePrivateSnatRequest {
        this['body'] = body;
        return this;
    }
}