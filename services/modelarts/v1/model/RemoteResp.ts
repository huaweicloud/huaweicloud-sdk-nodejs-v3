import { RemoteObsResp } from './RemoteObsResp';


export class RemoteResp {
    public obs?: RemoteObsResp;
    public constructor(obs?: RemoteObsResp) { 
        this['obs'] = obs;
    }
    public withObs(obs: RemoteObsResp): RemoteResp {
        this['obs'] = obs;
        return this;
    }
}