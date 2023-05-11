import { CreateTrackerRequestBody } from './CreateTrackerRequestBody';


export class CreateTrackerRequest {
    public body?: CreateTrackerRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTrackerRequestBody): CreateTrackerRequest {
        this['body'] = body;
        return this;
    }
}