import { CreateDdmInstanceReq } from './CreateDdmInstanceReq';


export class CreateDdmInstanceRequest {
    public body?: CreateDdmInstanceReq;
    public constructor() { 
    }
    public withBody(body: CreateDdmInstanceReq): CreateDdmInstanceRequest {
        this['body'] = body;
        return this;
    }
}