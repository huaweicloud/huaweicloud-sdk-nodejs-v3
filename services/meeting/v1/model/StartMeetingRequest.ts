import { StartRequest } from './StartRequest';


export class StartMeetingRequest {
    public body?: StartRequest;
    public constructor() { 
    }
    public withBody(body: StartRequest): StartMeetingRequest {
        this['body'] = body;
        return this;
    }
}