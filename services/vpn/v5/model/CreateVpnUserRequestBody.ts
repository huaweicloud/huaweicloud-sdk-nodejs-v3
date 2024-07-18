import { CreateVpnUserRequestBodyContent } from './CreateVpnUserRequestBodyContent';


export class CreateVpnUserRequestBody {
    public user?: CreateVpnUserRequestBodyContent;
    public constructor(user?: CreateVpnUserRequestBodyContent) { 
        this['user'] = user;
    }
    public withUser(user: CreateVpnUserRequestBodyContent): CreateVpnUserRequestBody {
        this['user'] = user;
        return this;
    }
}