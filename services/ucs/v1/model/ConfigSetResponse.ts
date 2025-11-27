import { ClusterInfo } from './ClusterInfo';
import { GitRepository } from './GitRepository';
import { Kustomization } from './Kustomization';
import { SecretInfo } from './SecretInfo';


export class ConfigSetResponse {
    public uid?: string;
    public name?: string;
    public namespace?: string;
    public configSetType?: string;
    public repoName?: string;
    public bucket?: object;
    public helmChart?: object;
    public gitRepository?: GitRepository;
    public helmRepository?: object;
    public repoStatus?: string;
    public helmRelease?: object;
    public kustomization?: Kustomization;
    public configSetStatus?: string;
    public clusterInfo?: ClusterInfo;
    public secretInfo?: SecretInfo;
    public constructor() { 
    }
    public withUid(uid: string): ConfigSetResponse {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): ConfigSetResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ConfigSetResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withConfigSetType(configSetType: string): ConfigSetResponse {
        this['configSetType'] = configSetType;
        return this;
    }
    public withRepoName(repoName: string): ConfigSetResponse {
        this['repoName'] = repoName;
        return this;
    }
    public withBucket(bucket: object): ConfigSetResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withHelmChart(helmChart: object): ConfigSetResponse {
        this['helmChart'] = helmChart;
        return this;
    }
    public withGitRepository(gitRepository: GitRepository): ConfigSetResponse {
        this['gitRepository'] = gitRepository;
        return this;
    }
    public withHelmRepository(helmRepository: object): ConfigSetResponse {
        this['helmRepository'] = helmRepository;
        return this;
    }
    public withRepoStatus(repoStatus: string): ConfigSetResponse {
        this['repoStatus'] = repoStatus;
        return this;
    }
    public withHelmRelease(helmRelease: object): ConfigSetResponse {
        this['helmRelease'] = helmRelease;
        return this;
    }
    public withKustomization(kustomization: Kustomization): ConfigSetResponse {
        this['kustomization'] = kustomization;
        return this;
    }
    public withConfigSetStatus(configSetStatus: string): ConfigSetResponse {
        this['configSetStatus'] = configSetStatus;
        return this;
    }
    public withClusterInfo(clusterInfo: ClusterInfo): ConfigSetResponse {
        this['clusterInfo'] = clusterInfo;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): ConfigSetResponse {
        this['secretInfo'] = secretInfo;
        return this;
    }
}