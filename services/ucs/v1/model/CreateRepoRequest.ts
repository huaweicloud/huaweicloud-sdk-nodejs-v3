import { CreateRepoRequestBody } from './CreateRepoRequestBody';


export class CreateRepoRequest {
    public body?: CreateRepoRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateRepoRequestBody): CreateRepoRequest {
        this['body'] = body;
        return this;
    }
}