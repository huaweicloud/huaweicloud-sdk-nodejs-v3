import { NamedAuthInfo } from './NamedAuthInfo';
import { NamedCluster } from './NamedCluster';
import { NamedContext } from './NamedContext';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterKubeconfigResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public clusters?: Array<NamedCluster>;
    public users?: Array<NamedAuthInfo>;
    public contexts?: Array<NamedContext>;
    private 'current-context'?: string;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateClusterKubeconfigResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateClusterKubeconfigResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withClusters(clusters: Array<NamedCluster>): CreateClusterKubeconfigResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withUsers(users: Array<NamedAuthInfo>): CreateClusterKubeconfigResponse {
        this['users'] = users;
        return this;
    }
    public withContexts(contexts: Array<NamedContext>): CreateClusterKubeconfigResponse {
        this['contexts'] = contexts;
        return this;
    }
    public withCurrentContext(currentContext: string): CreateClusterKubeconfigResponse {
        this['current-context'] = currentContext;
        return this;
    }
    public set currentContext(currentContext: string  | undefined) {
        this['current-context'] = currentContext;
    }
    public get currentContext(): string | undefined {
        return this['current-context'];
    }
}