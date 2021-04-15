import { Clusters } from './Clusters';
import { Contexts } from './Contexts';
import { Users } from './Users';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKubernetesClusterCertResponse extends SdkResponse {
    public apiVersion?: string;
    public clusters?: Array<Clusters>;
    public contexts?: Array<Contexts>;
    private 'current-context'?: string | undefined;
    public kind?: string;
    public preferences?: object;
    public users?: Array<Users>;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateKubernetesClusterCertResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withClusters(clusters: Array<Clusters>): CreateKubernetesClusterCertResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withContexts(contexts: Array<Contexts>): CreateKubernetesClusterCertResponse {
        this['contexts'] = contexts;
        return this;
    }
    public withCurrentContext(currentContext: string): CreateKubernetesClusterCertResponse {
        this['current-context'] = currentContext;
        return this;
    }
    public set currentContext(currentContext: string | undefined) {
        this['current-context'] = currentContext;
    }
    public get currentContext() {
        return this['current-context'];
    }
    public withKind(kind: string): CreateKubernetesClusterCertResponse {
        this['kind'] = kind;
        return this;
    }
    public withPreferences(preferences: object): CreateKubernetesClusterCertResponse {
        this['preferences'] = preferences;
        return this;
    }
    public withUsers(users: Array<Users>): CreateKubernetesClusterCertResponse {
        this['users'] = users;
        return this;
    }
}