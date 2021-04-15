import { AgencyAuthIdentity } from './AgencyAuthIdentity';


export class AgencyAuth {
    public identity: AgencyAuthIdentity;
    public constructor(identity?: any) { 
        this['identity'] = identity;
    }
    public withIdentity(identity: AgencyAuthIdentity): AgencyAuth {
        this['identity'] = identity;
        return this;
    }
}