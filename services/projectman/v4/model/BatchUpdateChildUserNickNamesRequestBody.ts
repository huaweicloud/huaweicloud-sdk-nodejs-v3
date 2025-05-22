import { UpdateChildUserNickNameRequestBody } from './UpdateChildUserNickNameRequestBody';


export class BatchUpdateChildUserNickNamesRequestBody {
    public users?: Array<UpdateChildUserNickNameRequestBody>;
    public constructor(users?: Array<UpdateChildUserNickNameRequestBody>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<UpdateChildUserNickNameRequestBody>): BatchUpdateChildUserNickNamesRequestBody {
        this['users'] = users;
        return this;
    }
}