import { PrePaidServer } from './PrePaidServer';


export class CreateServersRequestBody {
    private 'dry_run'?: boolean;
    public server?: PrePaidServer;
    public constructor(server?: PrePaidServer) { 
        this['server'] = server;
    }
    public withDryRun(dryRun: boolean): CreateServersRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withServer(server: PrePaidServer): CreateServersRequestBody {
        this['server'] = server;
        return this;
    }
}