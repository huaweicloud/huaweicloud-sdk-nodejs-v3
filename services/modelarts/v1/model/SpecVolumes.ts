import { Nfs } from './Nfs';
import { Obs } from './Obs';
import { Pfs } from './Pfs';


export class SpecVolumes {
    public nfs?: Nfs;
    public pfs?: Pfs;
    public obs?: Obs;
    public constructor() { 
    }
    public withNfs(nfs: Nfs): SpecVolumes {
        this['nfs'] = nfs;
        return this;
    }
    public withPfs(pfs: Pfs): SpecVolumes {
        this['pfs'] = pfs;
        return this;
    }
    public withObs(obs: Obs): SpecVolumes {
        this['obs'] = obs;
        return this;
    }
}