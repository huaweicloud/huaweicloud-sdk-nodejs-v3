import { CreateOtTemplatesReqDTO } from './CreateOtTemplatesReqDTO';


export class AddOtTemplatesRequest {
    public body?: CreateOtTemplatesReqDTO;
    public constructor() { 
    }
    public withBody(body: CreateOtTemplatesReqDTO): AddOtTemplatesRequest {
        this['body'] = body;
        return this;
    }
}