import { RemoteObs } from './RemoteObs';


export class Remote {
    public obs?: RemoteObs;
    public constructor(obs?: RemoteObs) { 
        this['obs'] = obs;
    }
    public withObs(obs: RemoteObs): Remote {
        this['obs'] = obs;
        return this;
    }
}