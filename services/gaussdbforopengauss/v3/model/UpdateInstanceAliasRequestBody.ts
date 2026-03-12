

export class UpdateInstanceAliasRequestBody {
    public alias?: string;
    public constructor(alias?: string) { 
        this['alias'] = alias;
    }
    public withAlias(alias: string): UpdateInstanceAliasRequestBody {
        this['alias'] = alias;
        return this;
    }
}