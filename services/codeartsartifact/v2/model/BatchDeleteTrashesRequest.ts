import { TrashArtifactModelForDelete } from './TrashArtifactModelForDelete';


export class BatchDeleteTrashesRequest {
    public body?: Array<TrashArtifactModelForDelete>;
    public constructor() { 
    }
    public withBody(body: Array<TrashArtifactModelForDelete>): BatchDeleteTrashesRequest {
        this['body'] = body;
        return this;
    }
}