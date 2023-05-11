import { UpdateTrackerRequestBody } from './UpdateTrackerRequestBody';


export class UpdateTrackerRequest {
    public body?: UpdateTrackerRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateTrackerRequestBody): UpdateTrackerRequest {
        this['body'] = body;
        return this;
    }
}