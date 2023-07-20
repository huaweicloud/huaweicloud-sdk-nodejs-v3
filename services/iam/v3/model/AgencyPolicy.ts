import { AgencyPolicyStatement } from './AgencyPolicyStatement';


export class AgencyPolicy {
    private 'Version'?: string;
    private 'Statement'?: Array<AgencyPolicyStatement>;
    public constructor(version?: string, statement?: Array<AgencyPolicyStatement>) { 
        this['Version'] = version;
        this['Statement'] = statement;
    }
    public withVersion(version: string): AgencyPolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string  | undefined) {
        this['Version'] = version;
    }
    public get version(): string | undefined {
        return this['Version'];
    }
    public withStatement(statement: Array<AgencyPolicyStatement>): AgencyPolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<AgencyPolicyStatement>  | undefined) {
        this['Statement'] = statement;
    }
    public get statement(): Array<AgencyPolicyStatement> | undefined {
        return this['Statement'];
    }
}