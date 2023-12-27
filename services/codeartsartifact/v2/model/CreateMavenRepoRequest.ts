import { IDERepositoryDO } from './IDERepositoryDO';


export class CreateMavenRepoRequest {
    public body?: IDERepositoryDO;
    public constructor() { 
    }
    public withBody(body: IDERepositoryDO): CreateMavenRepoRequest {
        this['body'] = body;
        return this;
    }
}