import { JobsRequestBody } from './JobsRequestBody';


export class RestoreRecyclingJobsRequest {
    public body?: JobsRequestBody;
    public constructor() { 
    }
    public withBody(body: JobsRequestBody): RestoreRecyclingJobsRequest {
        this['body'] = body;
        return this;
    }
}