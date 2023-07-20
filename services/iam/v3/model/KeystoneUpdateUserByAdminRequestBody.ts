import { KeystoneUpdateUserOption } from './KeystoneUpdateUserOption';


export class KeystoneUpdateUserByAdminRequestBody {
    public user?: KeystoneUpdateUserOption;
    public constructor(user?: KeystoneUpdateUserOption) { 
        this['user'] = user;
    }
    public withUser(user: KeystoneUpdateUserOption): KeystoneUpdateUserByAdminRequestBody {
        this['user'] = user;
        return this;
    }
}