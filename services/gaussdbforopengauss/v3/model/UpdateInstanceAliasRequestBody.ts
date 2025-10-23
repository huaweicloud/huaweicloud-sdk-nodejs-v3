

export class UpdateInstanceAliasRequestBody {
    public alias?: string;
    public constructor() { 
    }
    public withAlias(alias: string): UpdateInstanceAliasRequestBody {
        this['alias'] = alias;
        return this;
    }
}