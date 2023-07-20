

export class DbUserPrivilegeRequest {
    private 'user_name'?: string;
    private 'authorization_type'?: string;
    public privileges?: Array<string>;
    public constructor(userName?: string, authorizationType?: string, privileges?: Array<string>) { 
        this['user_name'] = userName;
        this['authorization_type'] = authorizationType;
        this['privileges'] = privileges;
    }
    public withUserName(userName: string): DbUserPrivilegeRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAuthorizationType(authorizationType: string): DbUserPrivilegeRequest {
        this['authorization_type'] = authorizationType;
        return this;
    }
    public set authorizationType(authorizationType: string  | undefined) {
        this['authorization_type'] = authorizationType;
    }
    public get authorizationType(): string | undefined {
        return this['authorization_type'];
    }
    public withPrivileges(privileges: Array<string>): DbUserPrivilegeRequest {
        this['privileges'] = privileges;
        return this;
    }
}