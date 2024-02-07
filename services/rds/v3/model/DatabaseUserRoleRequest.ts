

export class DatabaseUserRoleRequest {
    public user?: string;
    public roles?: Array<string>;
    public constructor(user?: string, roles?: Array<string>) { 
        this['user'] = user;
        this['roles'] = roles;
    }
    public withUser(user: string): DatabaseUserRoleRequest {
        this['user'] = user;
        return this;
    }
    public withRoles(roles: Array<string>): DatabaseUserRoleRequest {
        this['roles'] = roles;
        return this;
    }
}