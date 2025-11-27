import { NamedAuthInfo } from './NamedAuthInfo';
import { NamedCluster } from './NamedCluster';
import { NamedContext } from './NamedContext';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateFederationCertResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public clusters?: Array<NamedCluster>;
    public users?: Array<NamedAuthInfo>;
    public contexts?: Array<NamedContext>;
    private 'current-context'?: string;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateFederationCertResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateFederationCertResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withClusters(clusters: Array<NamedCluster>): CreateFederationCertResponse {
        this['clusters'] = clusters;
        return this;
    }
    public withUsers(users: Array<NamedAuthInfo>): CreateFederationCertResponse {
        this['users'] = users;
        return this;
    }
    public withContexts(contexts: Array<NamedContext>): CreateFederationCertResponse {
        this['contexts'] = contexts;
        return this;
    }
    public withCurrentContext(currentContext: string): CreateFederationCertResponse {
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