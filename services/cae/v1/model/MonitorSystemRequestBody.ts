import { ApiVersionObj } from './ApiVersionObj';
import { MonitorSystemKindObj } from './MonitorSystemKindObj';
import { MonitorSystemRequestBodySpec } from './MonitorSystemRequestBodySpec';


export class MonitorSystemRequestBody {
    private 'api_version'?: ApiVersionObj;
    public kind?: MonitorSystemKindObj;
    public spec?: MonitorSystemRequestBodySpec;
    public constructor() { 
    }
    public withApiVersion(apiVersion: ApiVersionObj): MonitorSystemRequestBody {
        this['api_version'] = apiVersion;
        return this;
    }
    public set apiVersion(apiVersion: ApiVersionObj  | undefined) {
        this['api_version'] = apiVersion;
    }
    public get apiVersion(): ApiVersionObj | undefined {
        return this['api_version'];
    }
    public withKind(kind: MonitorSystemKindObj): MonitorSystemRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withSpec(spec: MonitorSystemRequestBodySpec): MonitorSystemRequestBody {
        this['spec'] = spec;
        return this;
    }
}