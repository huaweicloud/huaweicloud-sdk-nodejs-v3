import { ApiVersionObj } from './ApiVersionObj';
import { CreateMetaDomain } from './CreateMetaDomain';
import { DomainKindObj } from './DomainKindObj';


export class CreateDomainReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: DomainKindObj;
    public metadata?: CreateMetaDomain;
    public constructor(apiVersion?: ApiVersionObj, kind?: DomainKindObj, metadata?: CreateMetaDomain) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['metadata'] = metadata;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateDomainReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: DomainKindObj): CreateDomainReq {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: CreateMetaDomain): CreateDomainReq {
        this['metadata'] = metadata;
        return this;
    }
}