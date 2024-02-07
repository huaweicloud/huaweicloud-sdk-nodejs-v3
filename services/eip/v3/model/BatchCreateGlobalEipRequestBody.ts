import { BatchCreateGlobalEipRequestBodyGlobalEip } from './BatchCreateGlobalEipRequestBodyGlobalEip';


export class BatchCreateGlobalEipRequestBody {
    private 'dry_run'?: boolean;
    private 'global_eip'?: BatchCreateGlobalEipRequestBodyGlobalEip;
    public constructor(globalEip?: BatchCreateGlobalEipRequestBodyGlobalEip) { 
        this['global_eip'] = globalEip;
    }
    public withDryRun(dryRun: boolean): BatchCreateGlobalEipRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalEip(globalEip: BatchCreateGlobalEipRequestBodyGlobalEip): BatchCreateGlobalEipRequestBody {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: BatchCreateGlobalEipRequestBodyGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): BatchCreateGlobalEipRequestBodyGlobalEip | undefined {
        return this['global_eip'];
    }
}