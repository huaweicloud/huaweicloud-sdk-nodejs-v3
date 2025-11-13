import { RemoveSecurityGroupOption } from './RemoveSecurityGroupOption';


export class RemoveSecurityGroupsRequestBody {
    public port?: RemoveSecurityGroupOption;
    private 'dry_run'?: boolean;
    public constructor(port?: RemoveSecurityGroupOption) { 
        this['port'] = port;
    }
    public withPort(port: RemoveSecurityGroupOption): RemoveSecurityGroupsRequestBody {
        this['port'] = port;
        return this;
    }
    public withDryRun(dryRun: boolean): RemoveSecurityGroupsRequestBody {
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