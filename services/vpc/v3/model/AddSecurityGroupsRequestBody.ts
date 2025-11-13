import { InsertSecurityGroupOption } from './InsertSecurityGroupOption';


export class AddSecurityGroupsRequestBody {
    public port?: InsertSecurityGroupOption;
    private 'dry_run'?: boolean;
    public constructor(port?: InsertSecurityGroupOption) { 
        this['port'] = port;
    }
    public withPort(port: InsertSecurityGroupOption): AddSecurityGroupsRequestBody {
        this['port'] = port;
        return this;
    }
    public withDryRun(dryRun: boolean): AddSecurityGroupsRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
}