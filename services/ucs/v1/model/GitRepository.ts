import { GitRepositoryMetaData } from './GitRepositoryMetaData';
import { GitRepositorySpec } from './GitRepositorySpec';
import { GitRepositoryStatus } from './GitRepositoryStatus';


export class GitRepository {
    public metadata?: GitRepositoryMetaData;
    public spec?: GitRepositorySpec;
    public status?: GitRepositoryStatus;
    public constructor() { 
    }
    public withMetadata(metadata: GitRepositoryMetaData): GitRepository {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: GitRepositorySpec): GitRepository {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: GitRepositoryStatus): GitRepository {
        this['status'] = status;
        return this;
    }
}