import { GitRepositorySpec } from './GitRepositorySpec';
import { SecretInfo } from './SecretInfo';


export class UpdateRepoRequestBody {
    public name?: string;
    public namespace?: string;
    public repoType?: string;
    public gitRepositorySpec?: GitRepositorySpec;
    public secretInfo?: SecretInfo;
    public constructor() { 
    }
    public withName(name: string): UpdateRepoRequestBody {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): UpdateRepoRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withRepoType(repoType: string): UpdateRepoRequestBody {
        this['repoType'] = repoType;
        return this;
    }
    public withGitRepositorySpec(gitRepositorySpec: GitRepositorySpec): UpdateRepoRequestBody {
        this['gitRepositorySpec'] = gitRepositorySpec;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): UpdateRepoRequestBody {
        this['secretInfo'] = secretInfo;
        return this;
    }
}