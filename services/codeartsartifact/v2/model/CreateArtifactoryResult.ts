import { RepositoryDO } from './RepositoryDO';


export class CreateArtifactoryResult {
    public artifactory?: RepositoryDO;
    public constructor() { 
    }
    public withArtifactory(artifactory: RepositoryDO): CreateArtifactoryResult {
        this['artifactory'] = artifactory;
        return this;
    }
}