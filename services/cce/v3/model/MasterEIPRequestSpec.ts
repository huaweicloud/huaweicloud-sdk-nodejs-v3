import { MasterEIPRequestSpecSpec } from './MasterEIPRequestSpecSpec';


export class MasterEIPRequestSpec {
    public action?: MasterEIPRequestSpecActionEnum;
    public spec?: MasterEIPRequestSpecSpec;
    public bandwidth?: string;
    public elasticIp?: string;
    public constructor() { 
    }
    public withAction(action: MasterEIPRequestSpecActionEnum): MasterEIPRequestSpec {
        this['action'] = action;
        return this;
    }
    public withSpec(spec: MasterEIPRequestSpecSpec): MasterEIPRequestSpec {
        this['spec'] = spec;
        return this;
    }
    public withBandwidth(bandwidth: string): MasterEIPRequestSpec {
        this['bandwidth'] = bandwidth;
        return this;
    }
    public withElasticIp(elasticIp: string): MasterEIPRequestSpec {
        this['elasticIp'] = elasticIp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MasterEIPRequestSpecActionEnum {
    BIND = 'bind',
    UNBIND = 'unbind'
}
