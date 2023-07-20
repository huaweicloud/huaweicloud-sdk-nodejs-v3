import { ServerId } from './ServerId';


export class BatchUpdateServersNameRequestBody {
    public name?: string;
    private 'dry_run'?: boolean;
    public servers?: Array<ServerId>;
    public constructor(name?: string, servers?: Array<ServerId>) { 
        this['name'] = name;
        this['servers'] = servers;
    }
    public withName(name: string): BatchUpdateServersNameRequestBody {
        this['name'] = name;
        return this;
    }
    public withDryRun(dryRun: boolean): BatchUpdateServersNameRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withServers(servers: Array<ServerId>): BatchUpdateServersNameRequestBody {
        this['servers'] = servers;
        return this;
    }
}