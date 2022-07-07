import { MasterEIPResponseSpecSpec } from './MasterEIPResponseSpecSpec';


export class MasterEIPResponseSpec {
    public action?: MasterEIPResponseSpecActionEnum;
    public spec?: MasterEIPResponseSpecSpec;
    public elasticIp?: string;
    public constructor() { 
    }
    public withAction(action: MasterEIPResponseSpecActionEnum): MasterEIPResponseSpec {
        this['action'] = action;
        return this;
    }
    public withSpec(spec: MasterEIPResponseSpecSpec): MasterEIPResponseSpec {
        this['spec'] = spec;
        return this;
    }
    public withElasticIp(elasticIp: string): MasterEIPResponseSpec {
        this['elasticIp'] = elasticIp;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MasterEIPResponseSpecActionEnum {
    BIND = 'bind'
}
