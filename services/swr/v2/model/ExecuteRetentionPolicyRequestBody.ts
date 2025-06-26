

export class ExecuteRetentionPolicyRequestBody {
    private 'dry_run'?: boolean;
    public constructor(dryRun?: boolean) { 
        this['dry_run'] = dryRun;
    }
    public withDryRun(dryRun: boolean): ExecuteRetentionPolicyRequestBody {
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