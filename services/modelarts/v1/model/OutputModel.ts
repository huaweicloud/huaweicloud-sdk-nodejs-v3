import { ObsModel } from './ObsModel';


export class OutputModel {
    public obs?: ObsModel;
    public constructor() { 
    }
    public withObs(obs: ObsModel): OutputModel {
        this['obs'] = obs;
        return this;
    }
}