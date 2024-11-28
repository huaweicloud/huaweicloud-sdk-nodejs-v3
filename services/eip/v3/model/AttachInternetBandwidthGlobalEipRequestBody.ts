import { AttachInternetBandwidthGlobalEipRequestBodyGlobalEip } from './AttachInternetBandwidthGlobalEipRequestBodyGlobalEip';


export class AttachInternetBandwidthGlobalEipRequestBody {
    private 'dry_run'?: boolean;
    private 'global_eip'?: AttachInternetBandwidthGlobalEipRequestBodyGlobalEip;
    public constructor(globalEip?: AttachInternetBandwidthGlobalEipRequestBodyGlobalEip) { 
        this['global_eip'] = globalEip;
    }
    public withDryRun(dryRun: boolean): AttachInternetBandwidthGlobalEipRequestBody {
        this['dry_run'] = dryRun;
        return this;
    }
    public set dryRun(dryRun: boolean  | undefined) {
        this['dry_run'] = dryRun;
    }
    public get dryRun(): boolean | undefined {
        return this['dry_run'];
    }
    public withGlobalEip(globalEip: AttachInternetBandwidthGlobalEipRequestBodyGlobalEip): AttachInternetBandwidthGlobalEipRequestBody {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: AttachInternetBandwidthGlobalEipRequestBodyGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): AttachInternetBandwidthGlobalEipRequestBodyGlobalEip | undefined {
        return this['global_eip'];
    }
}