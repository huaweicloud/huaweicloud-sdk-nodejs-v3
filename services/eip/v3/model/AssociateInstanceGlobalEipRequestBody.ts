import { AssociateInstanceGlobalEipRequestBodyGlobalEip } from './AssociateInstanceGlobalEipRequestBodyGlobalEip';


export class AssociateInstanceGlobalEipRequestBody {
    private 'dry_run'?: boolean;
    private 'global_eip'?: AssociateInstanceGlobalEipRequestBodyGlobalEip;
    public constructor(globalEip?: AssociateInstanceGlobalEipRequestBodyGlobalEip) { 
        this['global_eip'] = globalEip;
    }
    public withDryRun(dryRun: boolean): AssociateInstanceGlobalEipRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalEip(globalEip: AssociateInstanceGlobalEipRequestBodyGlobalEip): AssociateInstanceGlobalEipRequestBody {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: AssociateInstanceGlobalEipRequestBodyGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): AssociateInstanceGlobalEipRequestBodyGlobalEip | undefined {
        return this['global_eip'];
    }
}