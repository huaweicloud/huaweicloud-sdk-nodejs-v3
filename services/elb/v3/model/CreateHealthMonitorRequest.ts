import { CreateHealthMonitorRequestBody } from './CreateHealthMonitorRequestBody';


export class CreateHealthMonitorRequest {
    public body?: CreateHealthMonitorRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateHealthMonitorRequestBody): CreateHealthMonitorRequest {
        this['body'] = body;
        return this;
    }
}