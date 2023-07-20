import { UpdateDatabaseUserComment } from './UpdateDatabaseUserComment';


export class UpdateDatabaseUserCommentRequest {
    public users?: Array<UpdateDatabaseUserComment>;
    public constructor(users?: Array<UpdateDatabaseUserComment>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<UpdateDatabaseUserComment>): UpdateDatabaseUserCommentRequest {
        this['users'] = users;
        return this;
    }
}