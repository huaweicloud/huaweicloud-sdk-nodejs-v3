

export class GaussDBforOpenGaussRoleAttributes {
    public name?: string;
    public schema?: string;
    public readonly?: boolean;
    private 'default_privilege_grantee'?: string;
    public constructor(name?: string, schema?: string, readonly?: boolean) { 
        this['name'] = name;
        this['schema'] = schema;
        this['readonly'] = readonly;
    }
    public withName(name: string): GaussDBforOpenGaussRoleAttributes {
        this['name'] = name;
        return this;
    }
    public withSchema(schema: string): GaussDBforOpenGaussRoleAttributes {
        this['schema'] = schema;
        return this;
    }
    public withReadonly(readonly: boolean): GaussDBforOpenGaussRoleAttributes {
        this['readonly'] = readonly;
        return this;
    }
    public withDefaultPrivilegeGrantee(defaultPrivilegeGrantee: string): GaussDBforOpenGaussRoleAttributes {
        this['default_privilege_grantee'] = defaultPrivilegeGrantee;
        return this;
    }
    public set defaultPrivilegeGrantee(defaultPrivilegeGrantee: string  | undefined) {
        this['default_privilege_grantee'] = defaultPrivilegeGrantee;
    }
    public get defaultPrivilegeGrantee(): string | undefined {
        return this['default_privilege_grantee'];
    }
}