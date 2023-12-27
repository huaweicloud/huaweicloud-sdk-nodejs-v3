import { IDERepoSearchDO } from './IDERepoSearchDO';


export class SearchArtifactsRequest {
    public body?: IDERepoSearchDO;
    public constructor() { 
    }
    public withBody(body: IDERepoSearchDO): SearchArtifactsRequest {
        this['body'] = body;
        return this;
    }
}