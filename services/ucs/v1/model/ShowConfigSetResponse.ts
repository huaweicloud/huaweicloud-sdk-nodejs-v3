import { ClusterInfo } from './ClusterInfo';
import { GitRepository } from './GitRepository';
import { Kustomization } from './Kustomization';
import { SecretInfo } from './SecretInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowConfigSetResponse extends SdkResponse {
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
        super();
    }
    public withUid(uid: string): ShowConfigSetResponse {
        this['uid'] = uid;
        return this;
    }
    public withName(name: string): ShowConfigSetResponse {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): ShowConfigSetResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withConfigSetType(configSetType: string): ShowConfigSetResponse {
        this['configSetType'] = configSetType;
        return this;
    }
    public withRepoName(repoName: string): ShowConfigSetResponse {
        this['repoName'] = repoName;
        return this;
    }
    public withBucket(bucket: object): ShowConfigSetResponse {
        this['bucket'] = bucket;
        return this;
    }
    public withHelmChart(helmChart: object): ShowConfigSetResponse {
        this['helmChart'] = helmChart;
        return this;
    }
    public withGitRepository(gitRepository: GitRepository): ShowConfigSetResponse {
        this['gitRepository'] = gitRepository;
        return this;
    }
    public withHelmRepository(helmRepository: object): ShowConfigSetResponse {
        this['helmRepository'] = helmRepository;
        return this;
    }
    public withRepoStatus(repoStatus: string): ShowConfigSetResponse {
        this['repoStatus'] = repoStatus;
        return this;
    }
    public withHelmRelease(helmRelease: object): ShowConfigSetResponse {
        this['helmRelease'] = helmRelease;
        return this;
    }
    public withKustomization(kustomization: Kustomization): ShowConfigSetResponse {
        this['kustomization'] = kustomization;
        return this;
    }
    public withConfigSetStatus(configSetStatus: string): ShowConfigSetResponse {
        this['configSetStatus'] = configSetStatus;
        return this;
    }
    public withClusterInfo(clusterInfo: ClusterInfo): ShowConfigSetResponse {
        this['clusterInfo'] = clusterInfo;
        return this;
    }
    public withSecretInfo(secretInfo: SecretInfo): ShowConfigSetResponse {
        this['secretInfo'] = secretInfo;
        return this;
    }
}