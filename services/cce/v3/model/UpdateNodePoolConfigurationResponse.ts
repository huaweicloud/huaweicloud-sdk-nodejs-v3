import { ClusterConfigurationsSpec } from './ClusterConfigurationsSpec';
import { ConfigurationMetadata } from './ConfigurationMetadata';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNodePoolConfigurationResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ConfigurationMetadata;
    public spec?: ClusterConfigurationsSpec;
    public status?: object;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): UpdateNodePoolConfigurationResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): UpdateNodePoolConfigurationResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ConfigurationMetadata): UpdateNodePoolConfigurationResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterConfigurationsSpec): UpdateNodePoolConfigurationResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: object): UpdateNodePoolConfigurationResponse {
        this['status'] = status;
        return this;
    }
}