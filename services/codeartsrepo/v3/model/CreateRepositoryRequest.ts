import { CreateRepoRequest } from './CreateRepoRequest';


export class CreateRepositoryRequest {
    public body?: CreateRepoRequest;
    public constructor() { 
    }
    public withBody(body: CreateRepoRequest): CreateRepositoryRequest {
        this['body'] = body;
        return this;
    }
}