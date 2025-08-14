

export class CreateAliasReqBody {
    public alias?: string;
    public constructor(alias?: string) { 
        this['alias'] = alias;
    }
    public withAlias(alias: string): CreateAliasReqBody {
        this['alias'] = alias;
        return this;
    }
}