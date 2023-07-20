import { ListDeleteDatabaseUserRequest } from './ListDeleteDatabaseUserRequest';


export class DeleteDatabaseUserRequest {
    public users?: Array<ListDeleteDatabaseUserRequest>;
    public constructor(users?: Array<ListDeleteDatabaseUserRequest>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<ListDeleteDatabaseUserRequest>): DeleteDatabaseUserRequest {
        this['users'] = users;
        return this;
    }
}