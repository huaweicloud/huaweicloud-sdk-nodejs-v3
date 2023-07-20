import { MfaTotpUser } from './MfaTotpUser';


export class MfaTotp {
    public user?: MfaTotpUser;
    public constructor(user?: MfaTotpUser) { 
        this['user'] = user;
    }
    public withUser(user: MfaTotpUser): MfaTotp {
        this['user'] = user;
        return this;
    }
}