import { AgencyPolicyStatement } from './AgencyPolicyStatement';


export class AgencyPolicy {
    private 'Version': string | undefined;
    private 'Statement': Array<AgencyPolicyStatement> | undefined;
    public constructor(version?: any, statement?: any) { 
        this['Version'] = version;
        this['Statement'] = statement;
    }
    public withVersion(version: string): AgencyPolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string | undefined) {
        this['Version'] = version;
    }
    public get version() {
        return this['Version'];
    }
    public withStatement(statement: Array<AgencyPolicyStatement>): AgencyPolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<AgencyPolicyStatement> | undefined) {
        this['Statement'] = statement;
    }
    public get statement() {
        return this['Statement'];
    }
}