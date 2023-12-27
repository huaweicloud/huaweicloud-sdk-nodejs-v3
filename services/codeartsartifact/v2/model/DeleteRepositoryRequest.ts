import { IDERepoRevisionModel } from './IDERepoRevisionModel';


export class DeleteRepositoryRequest {
    public body?: IDERepoRevisionModel;
    public constructor() { 
    }
    public withBody(body: IDERepoRevisionModel): DeleteRepositoryRequest {
        this['body'] = body;
        return this;
    }
}