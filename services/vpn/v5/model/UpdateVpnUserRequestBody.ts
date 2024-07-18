import { UpdateVpnUserRequestBodyContent } from './UpdateVpnUserRequestBodyContent';


export class UpdateVpnUserRequestBody {
    public user?: UpdateVpnUserRequestBodyContent;
    public constructor(user?: UpdateVpnUserRequestBodyContent) { 
        this['user'] = user;
    }
    public withUser(user: UpdateVpnUserRequestBodyContent): UpdateVpnUserRequestBody {
        this['user'] = user;
        return this;
    }
}