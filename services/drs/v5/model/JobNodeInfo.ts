import { JobNodeBaseInfo } from './JobNodeBaseInfo';
import { JobNodeSpecInfo } from './JobNodeSpecInfo';
import { JobNodeVpcInfo } from './JobNodeVpcInfo';


export class JobNodeInfo {
    public spec?: JobNodeSpecInfo;
    public vpc?: JobNodeVpcInfo;
    private 'base_info'?: JobNodeBaseInfo;
    public constructor(spec?: JobNodeSpecInfo) { 
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
    public withBaseInfo(baseInfo: JobNodeBaseInfo): JobNodeInfo {
        this['base_info'] = baseInfo;
        return this;
    }
    public set baseInfo(baseInfo: JobNodeBaseInfo  | undefined) {
        this['base_info'] = baseInfo;
    }
    public get baseInfo(): JobNodeBaseInfo | undefined {
        return this['base_info'];
    }
}