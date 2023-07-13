import { JobNodeSpecInfo } from './JobNodeSpecInfo';
import { JobNodeVpcInfo } from './JobNodeVpcInfo';


export class JobNodeInfo {
    public spec: JobNodeSpecInfo;
    public vpc?: JobNodeVpcInfo;
    public constructor(spec?: any) { 
        this['spec'] = spec;
    }
    public withSpec(spec: JobNodeSpecInfo): JobNodeInfo {
        this['spec'] = spec;
        return this;
    }
    public withVpc(vpc: JobNodeVpcInfo): JobNodeInfo {
        this['vpc'] = vpc;
        return this;
    }
}