import { AgenciesTaskReq } from './AgenciesTaskReq';


export class CreateAgenciesTaskRequest {
    public body?: AgenciesTaskReq;
    public constructor() { 
    }
    public withBody(body: AgenciesTaskReq): CreateAgenciesTaskRequest {
        this['body'] = body;
        return this;
    }
}