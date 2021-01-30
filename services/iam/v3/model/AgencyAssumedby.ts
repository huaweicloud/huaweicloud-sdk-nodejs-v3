import { AgencyAssumedbyUser } from './AgencyAssumedbyUser';


export class AgencyAssumedby {
    public user: AgencyAssumedbyUser;
    public constructor(user: any) { 
        this['user'] = user;
    }
    public withUser(user: AgencyAssumedbyUser): AgencyAssumedby {
        this['user'] = user;
        return this;
    }
}