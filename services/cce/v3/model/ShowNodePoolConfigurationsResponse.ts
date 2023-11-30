import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodePoolConfigurationsResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ConfigurationMetadata;
    public spec?: ClusterConfigurationsSpec;
    public status?: object;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowNodePoolConfigurationsResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowNodePoolConfigurationsResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ConfigurationMetadata): ShowNodePoolConfigurationsResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterConfigurationsSpec): ShowNodePoolConfigurationsResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: object): ShowNodePoolConfigurationsResponse {
        this['status'] = status;
        return this;
    }
}