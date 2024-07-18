import { CustomStatement } from './CustomStatement';


export class CustomPolicy {
    private 'Version'?: string;
    private 'Statement'?: Array<CustomStatement>;
    public constructor(version?: string, statement?: Array<CustomStatement>) { 
        this['Version'] = version;
        this['Statement'] = statement;
    }
    public withVersion(version: string): CustomPolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string  | undefined) {
        this['Version'] = version;
    }
    public get version(): string | undefined {
        return this['Version'];
    }
    public withStatement(statement: Array<CustomStatement>): CustomPolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<CustomStatement>  | undefined) {
        this['Statement'] = statement;
    }
    public get statement(): Array<CustomStatement> | undefined {
        return this['Statement'];
    }
}