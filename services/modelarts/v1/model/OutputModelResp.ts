import { ObsModelResp } from './ObsModelResp';


export class OutputModelResp {
    public obs?: ObsModelResp;
    public constructor() { 
    }
    public withObs(obs: ObsModelResp): OutputModelResp {
        this['obs'] = obs;
        return this;
    }
}