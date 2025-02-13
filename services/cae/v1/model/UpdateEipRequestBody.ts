import { ApiVersionObj } from './ApiVersionObj';
import { EipKindObj } from './EipKindObj';
import { UpdateEipRequestBodySpec } from './UpdateEipRequestBodySpec';


export class UpdateEipRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: EipKindObj;
    public spec?: UpdateEipRequestBodySpec;
    public constructor() { 
    }
    public withApiVersion(apiVersion: ApiVersionObj): UpdateEipRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: EipKindObj): UpdateEipRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: UpdateEipRequestBodySpec): UpdateEipRequestBody {
        this['spec'] = spec;
        return this;
    }
}