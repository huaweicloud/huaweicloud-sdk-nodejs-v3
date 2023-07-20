

export class PolicyDepends {
    public catalog?: string;
    private 'display_name'?: string;
    public constructor(catalog?: string, displayName?: string) { 
        this['catalog'] = catalog;
        this['display_name'] = displayName;
    }
    public withCatalog(catalog: string): PolicyDepends {
        this['catalog'] = catalog;
        return this;
    }
    public withDisplayName(displayName: string): PolicyDepends {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
}