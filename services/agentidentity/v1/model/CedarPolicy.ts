

export class CedarPolicy {
    public statement?: string;
    public constructor(statement?: string) { 
        this['statement'] = statement;
    }
    public withStatement(statement: string): CedarPolicy {
        this['statement'] = statement;
        return this;
    }
}