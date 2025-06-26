import { PolicyStatement } from './PolicyStatement';


export class Policy {
    public version?: string;
    public statement?: PolicyStatement;
    public constructor() { 
    }
    public withVersion(version: string): Policy {
        this['version'] = version;
        return this;
    }
    public withStatement(statement: PolicyStatement): Policy {
        this['statement'] = statement;
        return this;
    }
}