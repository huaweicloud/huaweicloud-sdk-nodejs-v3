import { ServiceRequestBody } from './ServiceRequestBody';


export class CreateServiceRequest {
    public body?: ServiceRequestBody;
    public constructor() { 
    }
    public withBody(body: ServiceRequestBody): CreateServiceRequest {
        this['body'] = body;
        return this;
    }
}