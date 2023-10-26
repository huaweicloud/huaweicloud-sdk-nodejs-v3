import { SearchJobsRequestBody } from './SearchJobsRequestBody';


export class ListAllJobByNameRequest {
    public body?: SearchJobsRequestBody;
    public constructor() { 
    }
    public withBody(body: SearchJobsRequestBody): ListAllJobByNameRequest {
        this['body'] = body;
        return this;
    }
}