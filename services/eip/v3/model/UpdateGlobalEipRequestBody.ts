import { UpdateGlobalEipRequestBodyGlobalEip } from './UpdateGlobalEipRequestBodyGlobalEip';


export class UpdateGlobalEipRequestBody {
    private 'dry_run'?: boolean;
    private 'global_eip'?: UpdateGlobalEipRequestBodyGlobalEip;
    public constructor(globalEip?: UpdateGlobalEipRequestBodyGlobalEip) { 
        this['global_eip'] = globalEip;
    }
    public withDryRun(dryRun: boolean): UpdateGlobalEipRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalEip(globalEip: UpdateGlobalEipRequestBodyGlobalEip): UpdateGlobalEipRequestBody {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: UpdateGlobalEipRequestBodyGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): UpdateGlobalEipRequestBodyGlobalEip | undefined {
        return this['global_eip'];
    }
}