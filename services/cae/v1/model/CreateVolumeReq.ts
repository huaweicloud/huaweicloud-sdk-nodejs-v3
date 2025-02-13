import { ApiVersionObj } from './ApiVersionObj';
import { VolumeKindObj } from './VolumeKindObj';
import { VolumeSpec } from './VolumeSpec';


export class CreateVolumeReq {
    private 'api_version'?: ApiVersionObj;
    public kind?: VolumeKindObj;
    public spec?: VolumeSpec;
    public constructor(apiVersion?: ApiVersionObj, kind?: VolumeKindObj, spec?: VolumeSpec) { 
        this['api_version'] = apiVersion;
        this['kind'] = kind;
        this['spec'] = spec;
    }
    public withApiVersion(apiVersion: ApiVersionObj): CreateVolumeReq {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: VolumeKindObj): CreateVolumeReq {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: VolumeSpec): CreateVolumeReq {
        this['spec'] = spec;
        return this;
    }
}