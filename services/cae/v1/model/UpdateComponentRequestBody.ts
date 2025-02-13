import { ApiVersionObj } from './ApiVersionObj';
import { ComponentKindObj } from './ComponentKindObj';
import { UpdateComponentRequestMetadata } from './UpdateComponentRequestMetadata';
import { UpdateComponentRequestSpec } from './UpdateComponentRequestSpec';


export class UpdateComponentRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ComponentKindObj;
    public metadata?: UpdateComponentRequestMetadata;
    public spec?: UpdateComponentRequestSpec;
    public constructor(apiVersion?: ApiVersionObj, kind?: ComponentKindObj, metadata?: UpdateComponentRequestMetadata, spec?: UpdateComponentRequestSpec) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): UpdateComponentRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ComponentKindObj): UpdateComponentRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: UpdateComponentRequestMetadata): UpdateComponentRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: UpdateComponentRequestSpec): UpdateComponentRequestBody {
        this['spec'] = spec;
        return this;
    }
}