import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { ConfigurationItem } from './ConfigurationItem';
import { CreateComponentWithConfigurationRequestBodyMetadata } from './CreateComponentWithConfigurationRequestBodyMetadata';
import { CreateComponentWithConfigurationRequestBodySpec } from './CreateComponentWithConfigurationRequestBodySpec';


export class CreateComponentWithConfigurationRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: CreateComponentWithConfigurationRequestBodyMetadata;
    public spec?: CreateComponentWithConfigurationRequestBodySpec;
    public configurations?: Array<ConfigurationItem>;
    public constructor(apiVersion?: ApiVersionObj, kind?: ComponentKindObj) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateComponentWithConfigurationRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): CreateComponentWithConfigurationRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateComponentWithConfigurationRequestBodyMetadata): CreateComponentWithConfigurationRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CreateComponentWithConfigurationRequestBodySpec): CreateComponentWithConfigurationRequestBody {
        this['spec'] = spec;
        return this;
    }
    public withConfigurations(configurations: Array<ConfigurationItem>): CreateComponentWithConfigurationRequestBody {
        this['configurations'] = configurations;
        return this;
    }
}