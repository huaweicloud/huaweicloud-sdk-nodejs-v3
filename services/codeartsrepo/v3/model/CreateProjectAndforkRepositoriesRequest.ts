import { ForkProjectRepoRequest } from './ForkProjectRepoRequest';


export class CreateProjectAndforkRepositoriesRequest {
    public body?: ForkProjectRepoRequest;
    public constructor() { 
    }
    public withBody(body: ForkProjectRepoRequest): CreateProjectAndforkRepositoriesRequest {
        this['body'] = body;
        return this;
    }
}