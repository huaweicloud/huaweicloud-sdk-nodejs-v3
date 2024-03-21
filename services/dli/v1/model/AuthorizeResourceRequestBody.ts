import { Privilege } from './Privilege';


export class AuthorizeResourceRequestBody {
    private 'user_name'?: string;
    private 'grant_project_id'?: string;
    public action?: AuthorizeResourceRequestBodyActionEnum | string;
    public privileges?: Array<Privilege>;
    public constructor(action?: string, privileges?: Array<Privilege>) { 
        this['action'] = action;
        this['privileges'] = privileges;
    }
    public withUserName(userName: string): AuthorizeResourceRequestBody {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withGrantProjectId(grantProjectId: string): AuthorizeResourceRequestBody {
        this['grant_project_id'] = grantProjectId;
        return this;
    }
    public set grantProjectId(grantProjectId: string  | undefined) {
        this['grant_project_id'] = grantProjectId;
    }
    public get grantProjectId(): string | undefined {
        return this['grant_project_id'];
    }
    public withAction(action: AuthorizeResourceRequestBodyActionEnum | string): AuthorizeResourceRequestBody {
        this['action'] = action;
        return this;
    }
    public withPrivileges(privileges: Array<Privilege>): AuthorizeResourceRequestBody {
        this['privileges'] = privileges;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AuthorizeResourceRequestBodyActionEnum {
    GRANT = 'grant',
    REVOKE = 'revoke',
    UPDATE = 'update'
}
