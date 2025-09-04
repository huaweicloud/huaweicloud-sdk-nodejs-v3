import { CreateAppConfigsTemplatesReqDTO } from './CreateAppConfigsTemplatesReqDTO';


export class AddAppConfigsTemplatesRequest {
    public body?: CreateAppConfigsTemplatesReqDTO;
    public constructor() { 
    }
    public withBody(body: CreateAppConfigsTemplatesReqDTO): AddAppConfigsTemplatesRequest {
        this['body'] = body;
        return this;
    }
}