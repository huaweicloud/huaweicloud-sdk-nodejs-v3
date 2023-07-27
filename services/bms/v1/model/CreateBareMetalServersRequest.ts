import { CreateBaremetalServersBody } from './CreateBaremetalServersBody';


export class CreateBareMetalServersRequest {
    public body?: CreateBaremetalServersBody;
    public constructor() { 
    }
    public withBody(body: CreateBaremetalServersBody): CreateBareMetalServersRequest {
        this['body'] = body;
        return this;
    }
}