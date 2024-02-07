import { CreateGlobalEipRequestBodyGlobalEip } from './CreateGlobalEipRequestBodyGlobalEip';


export class CreateGlobalEipRequestBody {
    private 'dry_run'?: boolean;
    private 'global_eip'?: CreateGlobalEipRequestBodyGlobalEip;
    public constructor(globalEip?: CreateGlobalEipRequestBodyGlobalEip) { 
        this['global_eip'] = globalEip;
    }
    public withDryRun(dryRun: boolean): CreateGlobalEipRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalEip(globalEip: CreateGlobalEipRequestBodyGlobalEip): CreateGlobalEipRequestBody {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: CreateGlobalEipRequestBodyGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): CreateGlobalEipRequestBodyGlobalEip | undefined {
        return this['global_eip'];
    }
}