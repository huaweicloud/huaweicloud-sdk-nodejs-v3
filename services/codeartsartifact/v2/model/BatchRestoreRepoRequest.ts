import { IDETrashArtifactModel } from './IDETrashArtifactModel';


export class BatchRestoreRepoRequest {
    public body?: Array<IDETrashArtifactModel>;
    public constructor() { 
    }
    public withBody(body: Array<IDETrashArtifactModel>): BatchRestoreRepoRequest {
        this['body'] = body;
        return this;
    }
}