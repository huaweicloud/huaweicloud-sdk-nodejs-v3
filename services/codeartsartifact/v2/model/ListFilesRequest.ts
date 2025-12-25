import { RepoFileQueryDTOV5 } from './RepoFileQueryDTOV5';


export class ListFilesRequest {
    public body?: RepoFileQueryDTOV5;
    public constructor() { 
    }
    public withBody(body: RepoFileQueryDTOV5): ListFilesRequest {
        this['body'] = body;
        return this;
    }
}