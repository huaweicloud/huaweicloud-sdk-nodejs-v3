

export class EndpointPermissionList {
    public permissions?: Array<string>;
    public constructor(permissions?: Array<string>) { 
        this['permissions'] = permissions;
    }
    public withPermissions(permissions: Array<string>): EndpointPermissionList {
        this['permissions'] = permissions;
        return this;
    }
}