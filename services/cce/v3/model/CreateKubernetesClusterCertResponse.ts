import { Clusters } from './Clusters';
import { Contexts } from './Contexts';
import { Users } from './Users';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKubernetesClusterCertResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public preferences?: object;
    public clusters?: Array<Clusters>;
    public users?: Array<Users>;
    public contexts?: Array<Contexts>;
    private 'current-context'?: string | undefined;
    private 'Port-ID'?: string | undefined;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateKubernetesClusterCertResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateKubernetesClusterCertResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withPreferences(preferences: object): CreateKubernetesClusterCertResponse {
        this['preferences'] = preferences;
        return this;
    }
    public withClusters(clusters: Array<Clusters>): CreateKubernetesClusterCertResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withUsers(users: Array<Users>): CreateKubernetesClusterCertResponse {
        this['users'] = users;
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
    public withPortID(portID: string): CreateKubernetesClusterCertResponse {
        this['Port-ID'] = portID;
        return this;
    }
    public set portID(portID: string | undefined) {
        this['Port-ID'] = portID;
    }
    public get portID() {
        return this['Port-ID'];
    }
}