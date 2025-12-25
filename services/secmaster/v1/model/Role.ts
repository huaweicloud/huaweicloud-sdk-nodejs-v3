

export class Role {
    public id?: string;
    private 'display_name'?: string;
    private 'role_description'?: string;
    public description?: string;
    public scope?: string;
    public constructor(id?: string, displayName?: string, roleDescription?: string, description?: string, scope?: string) { 
        this['id'] = id;
        this['display_name'] = displayName;
        this['role_description'] = roleDescription;
        this['description'] = description;
        this['scope'] = scope;
    }
    public withId(id: string): Role {
        this['id'] = id;
        return this;
    }
    public withDisplayName(displayName: string): Role {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withRoleDescription(roleDescription: string): Role {
        this['role_description'] = roleDescription;
        return this;
    }
    public set roleDescription(roleDescription: string  | undefined) {
        this['role_description'] = roleDescription;
    }
    public get roleDescription(): string | undefined {
        return this['role_description'];
    }
    public withDescription(description: string): Role {
        this['description'] = description;
        return this;
    }
    public withScope(scope: string): Role {
        this['scope'] = scope;
        return this;
    }
}