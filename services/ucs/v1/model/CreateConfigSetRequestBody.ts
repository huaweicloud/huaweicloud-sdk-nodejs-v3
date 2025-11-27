import { ClusterInfo } from './ClusterInfo';
import { GitRepositorySpec } from './GitRepositorySpec';
import { KustomizationSpec } from './KustomizationSpec';
import { SecretInfo } from './SecretInfo';


export class CreateConfigSetRequestBody {
    public name?: string;
    public namespace?: string;
    public configSetType?: string;
    public repoName?: string;
    public bucketSpec?: object;
    public helmChartSpec?: object;
    public gitRepositorySpec?: GitRepositorySpec;
    public helmRepositorySpec?: object;
    public kustomizationSpec?: KustomizationSpec;
    public clusterInfo?: ClusterInfo;
    public secretInfo?: SecretInfo;
    public constructor(name?: string, namespace?: string) { 
        this['name'] = name;
        this['namespace'] = namespace;
    }
    public withName(name: string): CreateConfigSetRequestBody {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateConfigSetRequestBody {
        this['namespace'] = namespace;
        return this;
    }
    public withConfigSetType(configSetType: string): CreateConfigSetRequestBody {
        this['configSetType'] = configSetType;
        return this;
    }
    public withRepoName(repoName: string): CreateConfigSetRequestBody {
        this['repoName'] = repoName;
        return this;
    }
    public withBucketSpec(bucketSpec: object): CreateConfigSetRequestBody {
        this['bucketSpec'] = bucketSpec;
        return this;
    }
    public withHelmChartSpec(helmChartSpec: object): CreateConfigSetRequestBody {
        this['helmChartSpec'] = helmChartSpec;
        return this;
    }
    public withGitRepositorySpec(gitRepositorySpec: GitRepositorySpec): CreateConfigSetRequestBody {
        this['gitRepositorySpec'] = gitRepositorySpec;
        return this;
    }
    public withHelmRepositorySpec(helmRepositorySpec: object): CreateConfigSetRequestBody {
        this['helmRepositorySpec'] = helmRepositorySpec;
        return this;
    }
    public withKustomizationSpec(kustomizationSpec: KustomizationSpec): CreateConfigSetRequestBody {
        this['kustomizationSpec'] = kustomizationSpec;
        return this;
    }
    public withClusterInfo(clusterInfo: ClusterInfo): CreateConfigSetRequestBody {
        this['clusterInfo'] = clusterInfo;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): CreateConfigSetRequestBody {
        this['secretInfo'] = secretInfo;
        return this;
    }
}