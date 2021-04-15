import { PrePaidServer } from './PrePaidServer';


export class CreateServersRequestBody {
    private 'dry_run'?: boolean | undefined;
    public server: PrePaidServer;
    public constructor(server?: any) { 
        this['server'] = server;
    }
    public withDryRun(dryRun: boolean): CreateServersRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun() {
        return this['dry_run'];
    }
    public withServer(server: PrePaidServer): CreateServersRequestBody {
        this['server'] = server;
        return this;
    }
}