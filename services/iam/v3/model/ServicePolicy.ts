import { ServiceStatement } from './ServiceStatement';


export class ServicePolicy {
    private 'Version': string | undefined;
    private 'Statement': Array<ServiceStatement> | undefined;
    public constructor(version?: any, statement?: any) { 
        this['Version'] = version;
        this['Statement'] = statement;
    }
    public withVersion(version: string): ServicePolicy {
        this['Version'] = version;
        return this;
    }
    public set version(version: string | undefined) {
        this['Version'] = version;
    }
    public get version() {
        return this['Version'];
    }
    public withStatement(statement: Array<ServiceStatement>): ServicePolicy {
        this['Statement'] = statement;
        return this;
    }
    public set statement(statement: Array<ServiceStatement> | undefined) {
        this['Statement'] = statement;
    }
    public get statement() {
        return this['Statement'];
    }
}