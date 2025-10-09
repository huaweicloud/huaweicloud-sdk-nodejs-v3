import { CreateAgencyReqBody } from './CreateAgencyReqBody';


export class CreateAgencyV5Request {
    public body?: CreateAgencyReqBody;
    public constructor() { 
    }
    public withBody(body: CreateAgencyReqBody): CreateAgencyV5Request {
        this['body'] = body;
        return this;
    }
}