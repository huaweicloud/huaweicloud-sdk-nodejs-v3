import { PolicyDepends } from './PolicyDepends';
import { PolicyStatement } from './PolicyStatement';


export class RolePolicy {
    private 'Depends'?: Array<PolicyDepends>;
    private 'Statement'?: Array<PolicyStatement>;
    private 'Version'?: string;
    public constructor(statement?: Array<PolicyStatement>, version?: string) { 
        this['Statement'] = statement;
        this['Version'] = version;
    }
    public withDepends(depends: Array<PolicyDepends>): RolePolicy {
        this['Depends'] = depends;
        return this;
    }
    public set depends(depends: Array<PolicyDepends>  | undefined) {
        this['Depends'] = depends;
    }
    public get depends(): Array<PolicyDepends> | undefined {
        return this['Depends'];
    }
    public withStatement(statement: Array<PolicyStatement>): RolePolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<PolicyStatement>  | undefined) {
        this['Statement'] = statement;
    }
    public get statement(): Array<PolicyStatement> | undefined {
        return this['Statement'];
    }
    public withVersion(version: string): RolePolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string  | undefined) {
        this['Version'] = version;
    }
    public get version(): string | undefined {
        return this['Version'];
    }
}