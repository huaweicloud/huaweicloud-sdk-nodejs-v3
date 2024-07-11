import { ScaleNodePoolSpec } from './ScaleNodePoolSpec';


export class ScaleNodePoolRequestBody {
    public kind?: string;
    public apiVersion?: string;
    public spec?: ScaleNodePoolSpec;
    public constructor(kind?: string, apiVersion?: string, spec?: ScaleNodePoolSpec) { 
        this['kind'] = kind;
        this['apiVersion'] = apiVersion;
        this['spec'] = spec;
    }
    public withKind(kind: string): ScaleNodePoolRequestBody {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ScaleNodePoolRequestBody {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withSpec(spec: ScaleNodePoolSpec): ScaleNodePoolRequestBody {
        this['spec'] = spec;
        return this;
    }
}