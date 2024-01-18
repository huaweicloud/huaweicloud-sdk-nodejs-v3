import { CreateConnectionMonitorRequestBody } from './CreateConnectionMonitorRequestBody';


export class CreateConnectionMonitorRequest {
    public body?: CreateConnectionMonitorRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateConnectionMonitorRequestBody): CreateConnectionMonitorRequest {
        this['body'] = body;
        return this;
    }
}