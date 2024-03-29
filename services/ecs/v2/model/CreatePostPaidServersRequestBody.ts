import { PostPaidServer } from './PostPaidServer';


export class CreatePostPaidServersRequestBody {
    private 'dry_run'?: boolean;
    public server?: PostPaidServer;
    public constructor(server?: PostPaidServer) { 
        this['server'] = server;
    }
    public withDryRun(dryRun: boolean): CreatePostPaidServersRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withServer(server: PostPaidServer): CreatePostPaidServersRequestBody {
        this['server'] = server;
        return this;
    }
}