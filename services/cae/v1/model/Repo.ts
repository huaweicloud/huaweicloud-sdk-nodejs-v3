

export class Repo {
    private 'auth_name'?: string;
    public branch?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withAuthName(authName: string): Repo {
        this['auth_name'] = authName;
        return this;
    }
    public set authName(authName: string  | undefined) {
        this['auth_name'] = authName;
    }
    public get authName(): string | undefined {
        return this['auth_name'];
    }
    public withBranch(branch: string): Repo {
        this['branch'] = branch;
        return this;
    }
    public withNamespace(namespace: string): Repo {
        this['namespace'] = namespace;
        return this;
    }
}