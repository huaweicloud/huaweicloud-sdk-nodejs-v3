import { AuthorizeObsPolicyStatement } from './AuthorizeObsPolicyStatement';


export class Policy {
    public version?: string;
    public statement?: AuthorizeObsPolicyStatement;
    public constructor() { 
    }
    public withVersion(version: string): Policy {
        this['version'] = version;
        return this;
    }
    public withStatement(statement: AuthorizeObsPolicyStatement): Policy {
        this['statement'] = statement;
        return this;
    }
}