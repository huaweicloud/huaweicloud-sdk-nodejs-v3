

export class CreateAgencyRequest {
    public roles?: Array<string>;
    public constructor(roles?: Array<string>) { 
        this['roles'] = roles;
    }
    public withRoles(roles: Array<string>): CreateAgencyRequest {
        this['roles'] = roles;
        return this;
    }
}