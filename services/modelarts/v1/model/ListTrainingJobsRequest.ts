import { JobSearches } from './JobSearches';


export class ListTrainingJobsRequest {
    public body?: JobSearches;
    public constructor() { 
    }
    public withBody(body: JobSearches): ListTrainingJobsRequest {
        this['body'] = body;
        return this;
    }
}