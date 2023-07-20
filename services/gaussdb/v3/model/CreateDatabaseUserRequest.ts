import { CreateDatabaseUserList } from './CreateDatabaseUserList';


export class CreateDatabaseUserRequest {
    public users?: Array<CreateDatabaseUserList>;
    public constructor(users?: Array<CreateDatabaseUserList>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<CreateDatabaseUserList>): CreateDatabaseUserRequest {
        this['users'] = users;
        return this;
    }
}