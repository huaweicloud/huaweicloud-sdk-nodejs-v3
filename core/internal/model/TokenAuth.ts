import { TokenAuthIdentity } from './TokenAuthIdentity';


export class TokenAuth {
    public identity?: TokenAuthIdentity;
    public constructor(identity?: TokenAuthIdentity) { 
        this.identity = identity;
    }
    public withIdentity(identity: TokenAuthIdentity): this {
        this.identity = identity;
        return this;
    }
}
