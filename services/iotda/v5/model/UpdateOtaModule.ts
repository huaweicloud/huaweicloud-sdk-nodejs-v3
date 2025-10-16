

export class UpdateOtaModule {
    private 'alias_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withAliasName(aliasName: string): UpdateOtaModule {
        this['alias_name'] = aliasName;
        return this;
    }
    public set aliasName(aliasName: string  | undefined) {
        this['alias_name'] = aliasName;
    }
    public get aliasName(): string | undefined {
        return this['alias_name'];
    }
    public withDescription(description: string): UpdateOtaModule {
        this['description'] = description;
        return this;
    }
}