import { UpdateUserInformationOption } from './UpdateUserInformationOption';


export class UpdateUserInformationRequestBody {
    public user: UpdateUserInformationOption;
    public constructor(user: any) { 
        this['user'] = user;
    }
    public withUser(user: UpdateUserInformationOption): UpdateUserInformationRequestBody {
        this['user'] = user;
        return this;
    }
}