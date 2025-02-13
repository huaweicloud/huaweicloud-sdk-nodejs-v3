import { ApiVersionObj } from './ApiVersionObj';
import { CreateEnvironmentRequestBodyMetadata } from './CreateEnvironmentRequestBodyMetadata';
import { EnvironmentKindObj } from './EnvironmentKindObj';


export class CreateEnvironmentRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: EnvironmentKindObj;
    public metadata?: CreateEnvironmentRequestBodyMetadata;
    public constructor(apiVersion?: ApiVersionObj, kind?: EnvironmentKindObj, metadata?: CreateEnvironmentRequestBodyMetadata) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateEnvironmentRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: EnvironmentKindObj): CreateEnvironmentRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateEnvironmentRequestBodyMetadata): CreateEnvironmentRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}