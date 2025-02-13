import { ActionKindObj } from './ActionKindObj';
import { ActionOnComponentSpec } from './ActionOnComponentSpec';
import { ApiVersionObj } from './ApiVersionObj';
import { ExecuteActionRequestBodyMetadata } from './ExecuteActionRequestBodyMetadata';


export class ExecuteActionRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ActionKindObj;
    public metadata?: ExecuteActionRequestBodyMetadata;
    public spec?: ActionOnComponentSpec;
    public constructor(apiVersion?: ApiVersionObj, kind?: ActionKindObj) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
    }
    public withApiVersion(apiVersion: ApiVersionObj): ExecuteActionRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ActionKindObj): ExecuteActionRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ExecuteActionRequestBodyMetadata): ExecuteActionRequestBody {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ActionOnComponentSpec): ExecuteActionRequestBody {
        this['spec'] = spec;
        return this;
    }
}