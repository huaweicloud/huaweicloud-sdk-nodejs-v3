

export class AuthModel {
    public status?: boolean;
    private 'role_name'?: Array<string>;
    public constructor() { 
    }
    public withStatus(status: boolean): AuthModel {
        this['status'] = status;
        return this;
    }
    public withRoleName(roleName: Array<string>): AuthModel {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: Array<string>  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): Array<string> | undefined {
        return this['role_name'];
    }
}