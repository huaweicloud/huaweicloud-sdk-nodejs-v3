import { GrantDatabasePermission } from './GrantDatabasePermission';


export class GrantDatabasePermissionRequestBody {
    public users?: Array<GrantDatabasePermission>;
    public constructor(users?: Array<GrantDatabasePermission>) { 
        this['users'] = users;
    }
    public withUsers(users: Array<GrantDatabasePermission>): GrantDatabasePermissionRequestBody {
        this['users'] = users;
        return this;
    }
}