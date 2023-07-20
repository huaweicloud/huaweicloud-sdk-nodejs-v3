

export class ModifyAliasRequest {
    public alias?: string;
    public constructor(alias?: string) { 
        this['alias'] = alias;
    }
    public withAlias(alias: string): ModifyAliasRequest {
        this['alias'] = alias;
        return this;
    }
}