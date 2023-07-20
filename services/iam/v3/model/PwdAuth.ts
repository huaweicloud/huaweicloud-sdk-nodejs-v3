import { AuthScope } from './AuthScope';
import { PwdIdentity } from './PwdIdentity';


export class PwdAuth {
    public identity?: PwdIdentity;
    public scope?: AuthScope;
    public constructor(identity?: PwdIdentity, scope?: AuthScope) { 
        this['identity'] = identity;
        this['scope'] = scope;
    }
    public withIdentity(identity: PwdIdentity): PwdAuth {
        this['identity'] = identity;
        return this;
    }
    public withScope(scope: AuthScope): PwdAuth {
        this['scope'] = scope;
        return this;
    }
}