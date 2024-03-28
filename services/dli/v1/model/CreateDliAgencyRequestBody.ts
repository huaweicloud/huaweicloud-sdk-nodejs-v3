

export class CreateDliAgencyRequestBody {
    public roles?: Array<string>;
    public constructor(roles?: Array<string>) { 
        this['roles'] = roles;
    }
    public withRoles(roles: Array<string>): CreateDliAgencyRequestBody {
        this['roles'] = roles;
        return this;
    }
}