import { MasterEIPRequestSpec } from './MasterEIPRequestSpec';


export class MasterEIPRequest {
    public spec?: MasterEIPRequestSpec;
    public constructor(spec?: MasterEIPRequestSpec) { 
        this['spec'] = spec;
    }
    public withSpec(spec: MasterEIPRequestSpec): MasterEIPRequest {
        this['spec'] = spec;
        return this;
    }
}