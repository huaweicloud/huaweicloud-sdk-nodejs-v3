import { ResetDatabasePassword } from './ResetDatabasePassword';


export class ResetDatabasePasswordRequest {
    public users?: Array<ResetDatabasePassword>;
    public constructor(users?: Array<ResetDatabasePassword>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<ResetDatabasePassword>): ResetDatabasePasswordRequest {
        this['users'] = users;
        return this;
    }
}