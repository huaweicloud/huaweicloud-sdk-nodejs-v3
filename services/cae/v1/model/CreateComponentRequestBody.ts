import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { CreateComponentWithConfigurationRequestBodyMetadata } from './CreateComponentWithConfigurationRequestBodyMetadata';
import { CreateComponentWithConfigurationRequestBodySpec } from './CreateComponentWithConfigurationRequestBodySpec';


export class CreateComponentRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: CreateComponentWithConfigurationRequestBodyMetadata;
    public spec?: CreateComponentWithConfigurationRequestBodySpec;
    public constructor(apiVersion?: ApiVersionObj, kind?: ComponentKindObj, metadata?: CreateComponentWithConfigurationRequestBodyMetadata, spec?: CreateComponentWithConfigurationRequestBodySpec) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateComponentRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): CreateComponentRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateComponentWithConfigurationRequestBodyMetadata): CreateComponentRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: CreateComponentWithConfigurationRequestBodySpec): CreateComponentRequestBody {
        this['spec'] = spec;
        return this;
    }
}