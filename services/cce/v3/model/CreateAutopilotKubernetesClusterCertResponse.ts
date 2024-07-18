import { Clusters } from './Clusters';
import { Contexts } from './Contexts';
import { Users } from './Users';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotKubernetesClusterCertResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public preferences?: object;
    public clusters?: Array<Clusters>;
    public users?: Array<Users>;
    public contexts?: Array<Contexts>;
    private 'current-context'?: string;
    private 'Port-ID'?: string;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateAutopilotKubernetesClusterCertResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateAutopilotKubernetesClusterCertResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withPreferences(preferences: object): CreateAutopilotKubernetesClusterCertResponse {
        this['preferences'] = preferences;
        return this;
    }
    public withClusters(clusters: Array<Clusters>): CreateAutopilotKubernetesClusterCertResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withUsers(users: Array<Users>): CreateAutopilotKubernetesClusterCertResponse {
        this['users'] = users;
        return this;
    }
    public withContexts(contexts: Array<Contexts>): CreateAutopilotKubernetesClusterCertResponse {
        this['contexts'] = contexts;
        return this;
    }
    public withCurrentContext(currentContext: string): CreateAutopilotKubernetesClusterCertResponse {
        this['current-context'] = currentContext;
        return this;
    }
    public set currentContext(currentContext: string  | undefined) {
        this['current-context'] = currentContext;
    }
    public get currentContext(): string | undefined {
        return this['current-context'];
    }
    public withPortID(portID: string): CreateAutopilotKubernetesClusterCertResponse {
        this['Port-ID'] = portID;
        return this;
    }
    public set portID(portID: string  | undefined) {
        this['Port-ID'] = portID;
    }
    public get portID(): string | undefined {
        return this['Port-ID'];
    }
}