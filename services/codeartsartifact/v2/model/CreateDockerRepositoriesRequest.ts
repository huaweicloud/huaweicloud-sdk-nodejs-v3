import { CreateDockerRepositoryDO } from './CreateDockerRepositoryDO';


export class CreateDockerRepositoriesRequest {
    public body?: CreateDockerRepositoryDO;
    public constructor() { 
    }
    public withBody(body: CreateDockerRepositoryDO): CreateDockerRepositoriesRequest {
        this['body'] = body;
        return this;
    }
}