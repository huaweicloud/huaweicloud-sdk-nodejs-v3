

export class UpdateRdsInstanceAliasRequest {
    public alias?: string;
    public constructor() { 
    }
    public withAlias(alias: string): UpdateRdsInstanceAliasRequest {
        this['alias'] = alias;
        return this;
    }
}