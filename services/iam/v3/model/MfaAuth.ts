import { AuthScope } from './AuthScope';
import { MfaIdentity } from './MfaIdentity';


export class MfaAuth {
    public identity: MfaIdentity;
    public scope: AuthScope;
    public constructor(identity?: any, scope?: any) { 
        this['identity'] = identity;
        this['scope'] = scope;
    }
    public withIdentity(identity: MfaIdentity): MfaAuth {
        this['identity'] = identity;
        return this;
    }
    public withScope(scope: AuthScope): MfaAuth {
        this['scope'] = scope;
        return this;
    }
}