import { ApiVersionObj } from './ApiVersionObj';
import { VpcEgressKindObj } from './VpcEgressKindObj';
import { VpcEgressRequestBodySpec } from './VpcEgressRequestBodySpec';


export class VpcEgressRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: VpcEgressKindObj;
    public spec?: VpcEgressRequestBodySpec;
    public constructor() { 
    }
    public withApiVersion(apiVersion: ApiVersionObj): VpcEgressRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: VpcEgressKindObj): VpcEgressRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: VpcEgressRequestBodySpec): VpcEgressRequestBody {
        this['spec'] = spec;
        return this;
    }
}