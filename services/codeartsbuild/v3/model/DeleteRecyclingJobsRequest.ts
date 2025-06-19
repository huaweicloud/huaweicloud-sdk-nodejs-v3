import { JobsRequestBody } from './JobsRequestBody';


export class DeleteRecyclingJobsRequest {
    public body?: JobsRequestBody;
    public constructor() { 
    }
    public withBody(body: JobsRequestBody): DeleteRecyclingJobsRequest {
        this['body'] = body;
        return this;
    }
}