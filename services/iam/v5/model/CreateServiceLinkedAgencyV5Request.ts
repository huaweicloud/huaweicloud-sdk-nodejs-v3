import { CreateServiceLinkedAgencyReqBody } from './CreateServiceLinkedAgencyReqBody';


export class CreateServiceLinkedAgencyV5Request {
    public body?: CreateServiceLinkedAgencyReqBody;
    public constructor() { 
    }
    public withBody(body: CreateServiceLinkedAgencyReqBody): CreateServiceLinkedAgencyV5Request {
        this['body'] = body;
        return this;
    }
}