import { CreateNotMavenRepoDO } from './CreateNotMavenRepoDO';


export class CreateArtifactoryRequest {
    public body?: CreateNotMavenRepoDO;
    public constructor() { 
    }
    public withBody(body: CreateNotMavenRepoDO): CreateArtifactoryRequest {
        this['body'] = body;
        return this;
    }
}