import { DeletetemplatesReq } from './DeletetemplatesReq';


export class DeleteTemplatesRequest {
    public body?: DeletetemplatesReq;
    public constructor() { 
    }
    public withBody(body: DeletetemplatesReq): DeleteTemplatesRequest {
        this['body'] = body;
        return this;
    }
}