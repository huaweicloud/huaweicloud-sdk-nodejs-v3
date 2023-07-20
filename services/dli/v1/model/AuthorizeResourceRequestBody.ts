import { Privilege } from './Privilege';


export class AuthorizeResourceRequestBody {
    private 'user_name'?: string;
    public projectId?: string;
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
    public withProjectId(projectId: string): AuthorizeResourceRequestBody {
        this['projectId'] = projectId;
        return this;
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
