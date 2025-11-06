import { CreateEventsRequestBody } from './CreateEventsRequestBody';


export class CreateEventsRequest {
    public body?: Array<CreateEventsRequestBody>;
    public constructor() { 
    }
    public withBody(body: Array<CreateEventsRequestBody>): CreateEventsRequest {
        this['body'] = body;
        return this;
    }
}