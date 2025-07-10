import { CreateProjectRepoRequest } from './CreateProjectRepoRequest';


export class CreateProjectAndRepositoriesRequest {
    public body?: CreateProjectRepoRequest;
    public constructor() { 
    }
    public withBody(body: CreateProjectRepoRequest): CreateProjectAndRepositoriesRequest {
        this['body'] = body;
        return this;
    }
}