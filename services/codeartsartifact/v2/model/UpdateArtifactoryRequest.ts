import { UpdateNotMavenRepoDO } from './UpdateNotMavenRepoDO';


export class UpdateArtifactoryRequest {
    public body?: UpdateNotMavenRepoDO;
    public constructor() { 
    }
    public withBody(body: UpdateNotMavenRepoDO): UpdateArtifactoryRequest {
        this['body'] = body;
        return this;
    }
}