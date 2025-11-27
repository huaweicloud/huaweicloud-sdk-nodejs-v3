import { ClusterInfo } from './ClusterInfo';
import { GitRepositorySpec } from './GitRepositorySpec';
import { SecretInfo } from './SecretInfo';


export class CreateRepoRequestBody {
    public name?: string;
    public namespace?: string;
    public gitRepositorySpec?: GitRepositorySpec;
    public secretInfo?: SecretInfo;
    public clusterInfo?: ClusterInfo;
    public constructor() { 
    }
    public withName(name: string): CreateRepoRequestBody {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateRepoRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withGitRepositorySpec(gitRepositorySpec: GitRepositorySpec): CreateRepoRequestBody {
        this['gitRepositorySpec'] = gitRepositorySpec;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): CreateRepoRequestBody {
        this['secretInfo'] = secretInfo;
        return this;
    }
    public withClusterInfo(clusterInfo: ClusterInfo): CreateRepoRequestBody {
        this['clusterInfo'] = clusterInfo;
        return this;
    }
}