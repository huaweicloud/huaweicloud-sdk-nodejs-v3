import { AgencyTokenIdentity } from './AgencyTokenIdentity';
import { AgencyTokenScope } from './AgencyTokenScope';


export class AgencyTokenAuth {
    public identity: AgencyTokenIdentity;
    public scope: AgencyTokenScope;
    public constructor(identity?: any, scope?: any) { 
        this['identity'] = identity;
        this['scope'] = scope;
    }
    public withIdentity(identity: AgencyTokenIdentity): AgencyTokenAuth {
        this['identity'] = identity;
        return this;
    }
    public withScope(scope: AgencyTokenScope): AgencyTokenAuth {
        this['scope'] = scope;
        return this;
    }
}