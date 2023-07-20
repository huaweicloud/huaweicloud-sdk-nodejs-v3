import { DeleteDatabasePermission } from './DeleteDatabasePermission';


export class DeleteDatabasePermissionRequestBody {
    public users?: Array<DeleteDatabasePermission>;
    public constructor(users?: Array<DeleteDatabasePermission>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<DeleteDatabasePermission>): DeleteDatabasePermissionRequestBody {
        this['users'] = users;
        return this;
    }
}