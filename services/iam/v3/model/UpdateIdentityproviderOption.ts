

export class UpdateIdentityproviderOption {
    public description?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withDescription(description: string): UpdateIdentityproviderOption {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): UpdateIdentityproviderOption {
        this['enabled'] = enabled;
        return this;
    }
}