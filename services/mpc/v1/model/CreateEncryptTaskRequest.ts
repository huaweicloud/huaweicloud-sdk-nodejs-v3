import { CreateEncryptReq } from './CreateEncryptReq';


export class CreateEncryptTaskRequest {
    public body?: CreateEncryptReq;
    public constructor() { 
    }
    public withBody(body: CreateEncryptReq): CreateEncryptTaskRequest {
        this['body'] = body;
        return this;
    }
}