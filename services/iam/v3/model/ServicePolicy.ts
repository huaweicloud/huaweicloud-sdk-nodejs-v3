import { ServiceStatement } from './ServiceStatement';


export class ServicePolicy {
    private 'Version'?: string;
    private 'Statement'?: Array<ServiceStatement>;
    public constructor(version?: string, statement?: Array<ServiceStatement>) { 
        this['Version'] = version;
        this['Statement'] = statement;
    }
    public withVersion(version: string): ServicePolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string  | undefined) {
        this['Version'] = version;
    }
    public get version(): string | undefined {
        return this['Version'];
    }
    public withStatement(statement: Array<ServiceStatement>): ServicePolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<ServiceStatement>  | undefined) {
        this['Statement'] = statement;
    }
    public get statement(): Array<ServiceStatement> | undefined {
        return this['Statement'];
    }
}