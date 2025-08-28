import { UpdateUserDetailReq } from './UpdateUserDetailReq';


export class UpdateUserReq {
    public user?: UpdateUserDetailReq;
    public constructor(user?: UpdateUserDetailReq) { 
        this['user'] = user;
    }
    public withUser(user: UpdateUserDetailReq): UpdateUserReq {
        this['user'] = user;
        return this;
    }
}