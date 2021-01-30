import { ScopedTokenIdentity } from './ScopedTokenIdentity';
import { TokenSocpeOption } from './TokenSocpeOption';


export class ScopedTokenAuth {
    public identity: ScopedTokenIdentity;
    public scope: TokenSocpeOption;
    public constructor(identity: any, scope: any) { 
        this['identity'] = identity;
        this['scope'] = scope;
    }
    public withIdentity(identity: ScopedTokenIdentity): ScopedTokenAuth {
        this['identity'] = identity;
        return this;
    }
    public withScope(scope: TokenSocpeOption): ScopedTokenAuth {
        this['scope'] = scope;
        return this;
    }
}