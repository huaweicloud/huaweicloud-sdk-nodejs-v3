import { RemoteObs } from './RemoteObs';


export class AlgorithmRemote {
    public obs?: RemoteObs;
    public constructor() { 
    }
    public withObs(obs: RemoteObs): AlgorithmRemote {
        this['obs'] = obs;
        return this;
    }
}