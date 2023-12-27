import { PathMap } from './PathMap';


export class DeleteArtifactFileRequest {
    public body?: PathMap;
    public constructor() { 
    }
    public withBody(body: PathMap): DeleteArtifactFileRequest {
        this['body'] = body;
        return this;
    }
}