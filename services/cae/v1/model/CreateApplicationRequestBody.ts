import { ApiVersionObj } from './ApiVersionObj';
import { ApplicationKindObj } from './ApplicationKindObj';
import { CreateApplicationRequestBodyMetadata } from './CreateApplicationRequestBodyMetadata';


export class CreateApplicationRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: ApplicationKindObj;
    public metadata?: CreateApplicationRequestBodyMetadata;
    public constructor(apiVersion?: ApiVersionObj, kind?: ApplicationKindObj, metadata?: CreateApplicationRequestBodyMetadata) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateApplicationRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: ApplicationKindObj): CreateApplicationRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateApplicationRequestBodyMetadata): CreateApplicationRequestBody {
        this['metadata'] = metadata;
        return this;
    }
}