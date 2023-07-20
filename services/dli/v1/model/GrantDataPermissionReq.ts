import { GrantDataPermissionRespPrivilege } from './GrantDataPermissionRespPrivilege';


export class GrantDataPermissionReq {
    private 'user_name'?: string;
    public action?: string;
    public privileges?: Array<GrantDataPermissionRespPrivilege>;
    public constructor(userName?: string, action?: string, privileges?: Array<GrantDataPermissionRespPrivilege>) { 
        this['user_name'] = userName;
        this['action'] = action;
        this['privileges'] = privileges;
    }
    public withUserName(userName: string): GrantDataPermissionReq {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAction(action: string): GrantDataPermissionReq {
        this['action'] = action;
        return this;
    }
    public withPrivileges(privileges: Array<GrantDataPermissionRespPrivilege>): GrantDataPermissionReq {
        this['privileges'] = privileges;
        return this;
    }
}