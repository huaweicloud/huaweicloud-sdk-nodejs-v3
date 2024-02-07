

export class BatchAttachInternetBandwidthsGlobalEipRequestBody {
    private 'global_eips'?: Array<object>;
    public constructor(globalEips?: Array<object>) { 
        this['global_eips'] = globalEips;
    }
    public withGlobalEips(globalEips: Array<object>): BatchAttachInternetBandwidthsGlobalEipRequestBody {
        this['global_eips'] = globalEips;
        return this;
    }
    public set globalEips(globalEips: Array<object>  | undefined) {
        this['global_eips'] = globalEips;
    }
    public get globalEips(): Array<object> | undefined {
        return this['global_eips'];
    }
}