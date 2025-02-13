import { AgencyKindObj } from './AgencyKindObj';
import { AgencyMetadata } from './AgencyMetadata';
import { ApiVersionObj } from './ApiVersionObj';


export class Agency {
    private 'api_version'?: ApiVersionObj;
    public kind?: AgencyKindObj;
    public metadata?: AgencyMetadata;
    public constructor(apiVersion?: ApiVersionObj, kind?: AgencyKindObj, metadata?: AgencyMetadata) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: ApiVersionObj): Agency {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: AgencyKindObj): Agency {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: AgencyMetadata): Agency {
        this['metadata'] = metadata;
        return this;
    }
}