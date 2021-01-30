

export class IdentityproviderOption {
    public description?: string;
    public enabled?: boolean;
    public constructor() { 
    }
    public withDescription(description: string): IdentityproviderOption {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): IdentityproviderOption {
        this['enabled'] = enabled;
        return this;
    }
}