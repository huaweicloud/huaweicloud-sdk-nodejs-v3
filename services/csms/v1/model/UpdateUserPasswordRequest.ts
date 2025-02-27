import { ChangeUsersPassword } from './ChangeUsersPassword';


export class UpdateUserPasswordRequest {
    public body?: ChangeUsersPassword;
    public constructor() { 
    }
    public withBody(body: ChangeUsersPassword): UpdateUserPasswordRequest {
        this['body'] = body;
        return this;
    }
}