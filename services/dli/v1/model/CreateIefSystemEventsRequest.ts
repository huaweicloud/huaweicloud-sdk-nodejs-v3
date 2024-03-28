import { CreateIefSystemEventsRequestBody } from './CreateIefSystemEventsRequestBody';


export class CreateIefSystemEventsRequest {
    public body?: CreateIefSystemEventsRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateIefSystemEventsRequestBody): CreateIefSystemEventsRequest {
        this['body'] = body;
        return this;
    }
}