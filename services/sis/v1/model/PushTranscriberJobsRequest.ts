import { PostTranscriberJobs } from './PostTranscriberJobs';


export class PushTranscriberJobsRequest {
    public body?: PostTranscriberJobs;
    public constructor() { 
    }
    public withBody(body: PostTranscriberJobs): PushTranscriberJobsRequest {
        this['body'] = body;
        return this;
    }
}