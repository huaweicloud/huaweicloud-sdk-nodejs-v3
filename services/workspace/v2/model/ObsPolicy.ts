import { ObsPolicyStatement } from './ObsPolicyStatement';


export class ObsPolicy {
    public version?: string;
    public statement?: ObsPolicyStatement;
    public constructor() { 
    }
    public withVersion(version: string): ObsPolicy {
        this['version'] = version;
        return this;
    }
    public withStatement(statement: ObsPolicyStatement): ObsPolicy {
        this['statement'] = statement;
        return this;
    }
}