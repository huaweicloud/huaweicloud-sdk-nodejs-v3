import { KeystoneCreateUserOption } from './KeystoneCreateUserOption';


export class KeystoneCreateUserRequestBody {
    public user?: KeystoneCreateUserOption;
    public constructor(user?: KeystoneCreateUserOption) { 
        this['user'] = user;
    }
    public withUser(user: KeystoneCreateUserOption): KeystoneCreateUserRequestBody {
        this['user'] = user;
        return this;
    }
}