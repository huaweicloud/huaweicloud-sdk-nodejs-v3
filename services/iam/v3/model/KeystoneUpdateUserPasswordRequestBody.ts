import { KeystoneUpdatePasswordOption } from './KeystoneUpdatePasswordOption';


export class KeystoneUpdateUserPasswordRequestBody {
    public user: KeystoneUpdatePasswordOption;
    public constructor(user: any) { 
        this['user'] = user;
    }
    public withUser(user: KeystoneUpdatePasswordOption): KeystoneUpdateUserPasswordRequestBody {
        this['user'] = user;
        return this;
    }
}