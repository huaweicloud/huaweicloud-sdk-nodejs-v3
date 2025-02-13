import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { ConfigurationItem } from './ConfigurationItem';
import { CreateComponentSpec } from './CreateComponentSpec';
import { CreateComponentWithConfigurationResponseBodyStatus } from './CreateComponentWithConfigurationResponseBodyStatus';
import { MetadataResponse } from './MetadataResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateComponentWithConfigurationResponse extends SdkResponse {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: MetadataResponse;
    public spec?: CreateComponentSpec;
    public configurations?: Array<ConfigurationItem>;
    public status?: CreateComponentWithConfigurationResponseBodyStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateComponentWithConfigurationResponse {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): CreateComponentWithConfigurationResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: MetadataResponse): CreateComponentWithConfigurationResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CreateComponentSpec): CreateComponentWithConfigurationResponse {
        this['spec'] = spec;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationItem>): CreateComponentWithConfigurationResponse {
        this['configurations'] = configurations;
        return this;
    }
    public withStatus(status: CreateComponentWithConfigurationResponseBodyStatus): CreateComponentWithConfigurationResponse {
        this['status'] = status;
        return this;
    }
}