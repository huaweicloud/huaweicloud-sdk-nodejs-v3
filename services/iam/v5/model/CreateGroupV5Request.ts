import { CreateGroupReqBody } from './CreateGroupReqBody';


export class CreateGroupV5Request {
    public body?: CreateGroupReqBody;
    public constructor() { 
    }
    public withBody(body: CreateGroupReqBody): CreateGroupV5Request {
        this['body'] = body;
        return this;
    }
}