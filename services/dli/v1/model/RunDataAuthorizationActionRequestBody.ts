import { DataAuthorizationPrivilege } from './DataAuthorizationPrivilege';


export class RunDataAuthorizationActionRequestBody {
    private 'user_name'?: string;
    public action?: string;
    public privileges?: Array<DataAuthorizationPrivilege>;
    public constructor(userName?: string, action?: string, privileges?: Array<DataAuthorizationPrivilege>) { 
        this['user_name'] = userName;
        this['action'] = action;
        this['privileges'] = privileges;
    }
    public withUserName(userName: string): RunDataAuthorizationActionRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAction(action: string): RunDataAuthorizationActionRequestBody {
        this['action'] = action;
        return this;
    }
    public withPrivileges(privileges: Array<DataAuthorizationPrivilege>): RunDataAuthorizationActionRequestBody {
        this['privileges'] = privileges;
        return this;
    }
}