import { ClusterInfo } from './ClusterInfo';
import { GitRepository } from './GitRepository';
import { SecretInfo } from './SecretInfo';


export class RepoResponse {
    public uid?: string;
    public name?: string;
    public repoType?: string;
    public namespace?: string;
    public gitRepository?: GitRepository;
    public repoStatus?: string;
    public clusterInfo?: ClusterInfo;
    public secretInfo?: SecretInfo;
    public constructor() { 
    }
    public withUid(uid: string): RepoResponse {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): RepoResponse {
        this['name'] = name;
        return this;
    }
    public withRepoType(repoType: string): RepoResponse {
        this['repoType'] = repoType;
        return this;
    }
    public withNamespace(namespace: string): RepoResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withGitRepository(gitRepository: GitRepository): RepoResponse {
        this['gitRepository'] = gitRepository;
        return this;
    }
    public withRepoStatus(repoStatus: string): RepoResponse {
        this['repoStatus'] = repoStatus;
        return this;
    }
    public withClusterInfo(clusterInfo: ClusterInfo): RepoResponse {
        this['clusterInfo'] = clusterInfo;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): RepoResponse {
        this['secretInfo'] = secretInfo;
        return this;
    }
}